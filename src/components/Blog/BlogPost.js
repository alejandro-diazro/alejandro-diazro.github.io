import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MainBanner from "../Header/MainBanner";
import { formatDate, loadPost } from './posts';
import './blog.css';

const MarkdownLink = ({ href = '', children, node, ...props }) => {
    if (/^https?:\/\//.test(href)) {
        return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
    }
    return <a href={href} {...props}>{children}</a>;
};

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(undefined);

    useEffect(() => {
        setPost(undefined);
        loadPost(slug).then(setPost);
        window.scrollTo(0, 0);
    }, [slug]);

    if (post === undefined) {
        return <p>Loading...</p>;
    }

    if (post === null) {
        return (
            <>
                <MainBanner title="Post not found" description="This post does not exist." showButton={true} />
                <br/>
                <Link to="/blog" className="btn info">Back to Blog</Link>
            </>
        );
    }

    return (
        <>
            <MainBanner
                title={post.title}
                description={formatDate(post.date)}
                showButton={true}
            />
            <article className="portfolio blog-post">
                <Markdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
                    {post.content}
                </Markdown>
                <br/>
                <Link to="/blog" className="btn info">Back to Blog</Link>
            </article>
        </>
    );
};

export default BlogPost;
