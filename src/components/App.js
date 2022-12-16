import { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import AlternativeVPNPage from './pages/AlternativeVPNPage/AlternativeVPNPage';
import NewsPage from './pages/NewsPage/NewsPage';
import NewsListPage from './pages/NewsPage/NewsListPage';
import RatingPage from './pages/RatingPage/RatingPage';
import VPNPage from './pages/VPNPage/VPNPage';
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/alternativeVPN" element={<AlternativeVPNPage />} />
            <Route path="/news" element={<NewsListPage />} />
            <Route path="/rating" element={<RatingPage />} />
            <Route path="/rating/:vpn" element={<VPNPage />} />
            <Route path="/news/:newsName" element={<NewsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
