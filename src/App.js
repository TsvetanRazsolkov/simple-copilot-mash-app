import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SideMenu from './components/SideMenu';
import Home from './pages/Home';
import About from './pages/About';
import PostDetails from './pages/PostDetails';
import NewsFeed from './pages/NewsFeed';
import Twitter from './pages/Twitter';
import DynamicTabs from './pages/DynamicTabs';
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <SideMenu />
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/post/:id" component={PostDetails} />
                        <Route path="/news-feed" component={NewsFeed} />
                        <Route path="/twitter" component={Twitter} />
                        <Route path="/dynamic-tabs" component={DynamicTabs} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;