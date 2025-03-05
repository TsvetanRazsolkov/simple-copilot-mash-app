import React from 'react';
import { useHistory } from 'react-router-dom';
import Post from '../components/Post';
import posts from '../posts';

const Home = () => {
    const history = useHistory();

    const handlePostClick = (id) => {
        history.push(`/post/${id}`);
    };

    const truncateContent = (content, maxLength) => {
        if (content.length > maxLength) {
            return content.substring(0, maxLength) + '...';
        }
        return content;
    };

    return (
        <div>
            <h1>Welcome to My Blog</h1>
            {posts.map((post) => (
                <div key={post.id} onClick={() => handlePostClick(post.id)}>
                    <Post 
                        title={post.title} 
                        content={truncateContent(post.content, 100)} 
                        author={post.author} 
                        image={post.images[0]} 
                    />
                </div>
            ))}
        </div>
    );
};

export default Home;