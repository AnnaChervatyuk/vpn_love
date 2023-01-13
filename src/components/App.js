import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import AlternativeVPNPage from './pages/AlternativeVPNPage/AlternativeVPNPage';
import PostsPage from './pages/PostsPage/PostsPage';
import PostsListPage from './pages/PostsPage/PostsListPage';
import RatingPage from './pages/RatingPage/RatingPage';
import VPNPage from './pages/VPNPage/VPNPage';
import { PostsStore, VPNsStore } from '../stores/';

const App = () => {
  PostsStore.getPostsAsync();
  VPNsStore.getVPNsAsync();
  PostsStore.getTopRatedAsync();
  return (
    <div className="wrapper" id="wrapper">
      <>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/index.html" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/alternativeVPN" element={<AlternativeVPNPage />} />
          <Route path="/news" element={<PostsListPage />} />
          <Route path="/top" element={<PostsListPage />} />
          <Route path="/rating" element={<RatingPage />} />
          <Route path="/rating/:vpn" element={<VPNPage />} />
          <Route path="/news/:newsName" element={<PostsPage />} />
          <Route path="/top/:newsName" element={<PostsPage />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
