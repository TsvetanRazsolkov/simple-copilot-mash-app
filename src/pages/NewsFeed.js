import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsFeed.css';

const NewsFeed = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://api.thenewsapi.com/v1/news/top?api_token=KMwg3XUp71ZeMqhmRrb9KCDfjzVHKTGnyuE5oIQJ&locale=us');
                setArticles(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching news: {error.message}</div>;

    return (
        <div className="news-feed">
            <h1>News Feed</h1>
            {articles.map((article) => (
                <div key={article.uuid} className="news-article">
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            ))}
        </div>
    );
};

export default NewsFeed;