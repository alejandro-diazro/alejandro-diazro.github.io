import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainBanner from "../Header/MainBanner";
import { formatDate, loadAllPosts } from './posts';
import './blog.css';

const Blog = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        loadAllPosts().then(setPosts);
    }, []);

    return (
        <>
            <MainBanner
                title="Blog"
                description="Sometimes I feel like writing"
                showButton={true}
            />

            {posts === null && <p>Loading posts...</p>}
            {posts && posts.length === 0 && <p>No posts yet, come back soon!</p>}

            <div className="blog-list">
                {posts && posts.map((post) => (
                    <Link to={`/blog/${post.slug}`} key={post.slug} className="header-grid-card card blog-card">
                        <h3>{post.title}</h3>
                        {post.date && <span className="blog-date">{formatDate(post.date)}</span>}
                        {post.description && <p>{post.description}</p>}
                        <span className="card-link">Read more</span>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Blog;
