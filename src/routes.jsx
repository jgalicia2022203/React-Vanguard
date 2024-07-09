import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AccountInformationPage from './pages/admin/AccountInformationPage';
import AccountsInformationPage from './pages/admin/AccountsInformationPage';
import AdminHistoryPage from './pages/admin/AdminHistoryPage';
import AdminHomePage from './pages/admin/AdminHomePage';
import AdminProductsServicesPage from './pages/admin/AdminProductsServicesPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';
import CreditPage from './pages/admin/CreditPage';
import CustomerAccountsPage from './pages/admin/CustomerAccountsPage';
import CustomerInformationPage from './pages/admin/CustomerInformationPage';
import DepositPage from './pages/admin/DepositPage';
import RegisterCustomerPage from './pages/admin/RegisterCustomerPage';
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
                <Route path='/admin/home' element={<AdminHomePage />} />
                <Route path='/admin/customers' element={<CustomerAccountsPage />} />
                <Route path='/admin/register-customer' element={<RegisterCustomerPage />} />
                <Route path='/admin/accounts-information' element={<AccountsInformationPage />} />
                <Route path='/admin/account-information' element={<AccountInformationPage />} />
                <Route path='/admin/customer-information' element={<CustomerInformationPage />} />
                <Route path='/admin/products-services' element={<AdminProductsServicesPage />} />
                <Route path='/admin/settings' element={<AdminSettingsPage />} /> 
                <Route path='/admin/credit' element={<CreditPage />} />
                <Route path='/admin/deposit' element={<DepositPage />} />
                <Route path='/admin/history' element={<AdminHistoryPage />} />
            </Routes>
        </Router>
    );
}


export default AppRoutes;