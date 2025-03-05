import React from 'react';
import './Post.css';

const Post = ({ title, content, author, image }) => {
    return (
        <div className="post">
            <img src={image} alt={title} className="post-thumbnail" />
            <div className="post-content">
                <h2>{title}</h2>
                <p>{content}</p>
                <p><strong>Author:</strong> {author}</p>
            </div>
        </div>
    );
};

export default Post;