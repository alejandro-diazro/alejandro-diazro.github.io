import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';
import Journey from './components/Journey/Journey';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <ThemeToggle />

                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/journey" element={<Journey />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;