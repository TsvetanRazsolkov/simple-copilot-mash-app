import React, { useState } from 'react';
import './DynamicTabs.css';
import data from '../data/tabsData.json'; // Import the JSON data

const DynamicTabs = () => {
    const [activeTab, setActiveTab] = useState(data[0].id);

    const renderTabContent = () => {
        const activeTabData = data.find(tab => tab.id === activeTab);
        return (
            <div className="tab-content">
                <h2>{activeTabData.title}</h2>
                <p>{activeTabData.content}</p>
                <iframe
                    src={activeTabData.url}
                    title={activeTabData.title}
                    width="100%"
                    height="500px"
                    frameBorder="0"
                ></iframe>
            </div>
        );
    };

    return (
        <div className="dynamic-tabs-page">
            <h1>Dynamic Tabs</h1>
            <div className="tabs">
                {data.map(tab => (
                    <button
                        key={tab.id}
                        className={activeTab === tab.id ? 'active' : ''}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            {renderTabContent()}
        </div>
    );
};

export default DynamicTabs;