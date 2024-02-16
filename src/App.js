import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ArticleDetailScreen from './components/ArticleDetailScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetailScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
