import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from '../components/PostList';
import PostDetail from '../components/PostDetail';
import NotFound from '../components/notFound';

const App = () => {
    return (
        <Router>
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/posts/:postId" element={<PostDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
