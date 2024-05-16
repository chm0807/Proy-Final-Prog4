import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import CartPage from './Pages/CartPage';
import ShopPage from './Pages/ShopPage';
import NewsPage from './Pages/NewsPage';
import SitePage from './Pages/SitePage';
import PlayersPage from './Pages/PlayersPage';
import NextGamesPage from './Pages/NextGamesPage';
import TShirtsPage from './Pages/TShirtsPage';
import AccessoriesPage from './Pages/AccessoriesPage';
import PurchesPage from './Pages/PurchesPage';
import RosterPage from './Pages/roster';

function App() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/site" element={<SitePage />} />
                <Route path="/players" element={<PlayersPage />} />
                <Route path="/next-games" element={<NextGamesPage />} />
                <Route path="/t-shirts" element={<TShirtsPage />} />
                <Route path="/accessories" element={<AccessoriesPage />} />
                <Route path="/purches" element={<PurchesPage />} />
                <Route path="/roster" element={<RosterPage />} />
            </Routes>
        </Router>
    );
}

export default App;