import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';

const SideMenu = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`side-menu ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="toggle-button" onClick={toggleMenu}>
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </button>
            {!isCollapsed && (
                <>
                    <h2>Navigation</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/news-feed">News Feed</Link></li>
                        <li><Link to="/twitter">Twitter</Link></li>
                        <li><Link to="/dynamic-tabs">Dynamic Tabs</Link></li>
                    </ul>
                </>
            )}
        </div>
    );
};

export default SideMenu;