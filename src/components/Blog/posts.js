// Every .md file dropped into src/posts is picked up automatically at build time.
// The file name (without extension) becomes the post URL: src/posts/my-post.md -> #/blog/my-post
const postFiles = require.context('../../posts', false, /\.md$/);

const parseFrontMatter = (raw) => {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    if (!match) {
        return { data: {}, content: raw };
    }

    const data = {};
    match[1].split(/\r?\n/).forEach((line) => {
        const separator = line.indexOf(':');
        if (separator === -1) return;
        const key = line.slice(0, separator).trim();
        const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
        if (key) data[key] = value;
    });

    return { data, content: raw.slice(match[0].length) };
};

const posts = postFiles.keys().map((key) => {
    const slug = key.replace(/^\.\//, '').replace(/\.md$/, '');
    const file = postFiles(key);
    return { slug, url: file.default || file };
});

const cache = {};

export const loadPost = async (slug) => {
    if (cache[slug]) return cache[slug];

    const entry = posts.find((post) => post.slug === slug);
    if (!entry) return null;

    const response = await fetch(entry.url);
    const { data, content } = parseFrontMatter(await response.text());
    const post = {
        slug,
        title: data.title || slug,
        date: data.date || '',
        description: data.description || '',
        draft: data.draft === 'true',
        content,
    };
    cache[slug] = post;
    return post;
};

export const loadAllPosts = async () => {
    const loaded = await Promise.all(posts.map((post) => loadPost(post.slug)));
    return loaded
        .filter((post) => post && !post.draft)
        .sort((a, b) => b.date.localeCompare(a.date));
};

export const formatDate = (date) => {
    if (!date) return '';
    const parsed = new Date(`${date}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return date;
    return parsed.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
};
