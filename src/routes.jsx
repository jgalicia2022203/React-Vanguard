import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import FavoriteAccountsPage from './pages/client/FavoriteAccountsPage';
import HistoryPage from './pages/client/HistoryPage';
import HomePage from './pages/client/HomePage';
import ProductsServicesPage from './pages/client/ProductsServicesPage';
import SettingsPage from './pages/client/SettingsPage';
import ShoppingCartPage from './pages/client/ShoppingCartPage';
import TransferPage from './pages/client/TransferPage';
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/transfer" element={<TransferPage />} />
                <Route path="/products" element={<ProductsServicesPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/favorites' element={<FavoriteAccountsPage />} />
                <Route path='/transactions' element={<HistoryPage />} />
                <Route path='/cart' element={<ShoppingCartPage />} />
            </Routes>
        </Router>
    );
}


export default AppRoutes;