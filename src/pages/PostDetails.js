import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import posts from '../posts';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './PostDetails.css';

const PostDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const post = posts.find((post) => post.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    const images = post.images.map((url) => ({
        original: url,
        thumbnail: url,
        originalClass: 'zoom-image'
    }));

    return (
        <div className="post-details">
            <button className="back-button" onClick={() => history.goBack()}>
                <span className="arrow-left"></span> Back
            </button>
            <ImageGallery items={images} />
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p><strong>Author:</strong> {post.author}</p>
        </div>
    );
};

export default PostDetails;