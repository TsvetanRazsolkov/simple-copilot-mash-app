import React, { useState } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './Twitter.css';

const Twitter = () => {
    const [activeTab, setActiveTab] = useState('premierleague');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'premierleague':
                return <TwitterTimelineEmbed key="premierleague" sourceType="profile" screenName="premierleague" options={{ height: 800, width: '100%' }} />;
            case 'bbcnews':
                return <TwitterTimelineEmbed key="bbcnews" sourceType="profile" screenName="BBCNews" options={{ height: 800, width: '100%' }} />;
            case 'cnn':
                return <TwitterTimelineEmbed key="cnn" sourceType="profile" screenName="CNN" options={{ height: 800, width: '100%' }} />;
            default:
                return null;
        }
    };

    return (
        <div className="twitter-page">
            <h1>Twitter Feeds</h1>
            <div className="tabs">
                <button className={activeTab === 'premierleague' ? 'active' : ''} onClick={() => setActiveTab('premierleague')}>Premier League</button>
                <button className={activeTab === 'bbcnews' ? 'active' : ''} onClick={() => setActiveTab('bbcnews')}>BBC News</button>
                <button className={activeTab === 'cnn' ? 'active' : ''} onClick={() => setActiveTab('cnn')}>CNN</button>
            </div>
            <div className="tab-content">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default Twitter;