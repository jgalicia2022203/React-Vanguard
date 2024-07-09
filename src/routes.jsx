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
import ProtectedRoute from './shared/validators/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={
          <ProtectedRoute role="client">
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path="/transfer" element={
          <ProtectedRoute role="client">
            <TransferPage />
          </ProtectedRoute>
        } />
        <Route path="/products" element={
          <ProtectedRoute role="client">
            <ProductsServicesPage />
          </ProtectedRoute>
        } />
        <Route path='/settings' element={
          <ProtectedRoute role="client">
            <SettingsPage />
          </ProtectedRoute>
        } />
        <Route path='/favorites' element={
          <ProtectedRoute role="client">
            <FavoriteAccountsPage />
          </ProtectedRoute>
        } />
        <Route path='/transactions' element={
          <ProtectedRoute role="client">
            <HistoryPage />
          </ProtectedRoute>
        } />
        <Route path='/cart' element={
          <ProtectedRoute role="client">
            <ShoppingCartPage />
          </ProtectedRoute>
        } />
        <Route path='/admin/home' element={
          <ProtectedRoute role="admin">
            <AdminHomePage />
          </ProtectedRoute>
        } />
        <Route path='/admin/customers' element={
          <ProtectedRoute role="admin">
            <CustomerAccountsPage />
          </ProtectedRoute>
        } />
        <Route path='/admin/register-customer' element={
          <ProtectedRoute role="admin">
            <RegisterCustomerPage />
          </ProtectedRoute>
        } />
        <Route path='/admin/accounts-information' element={
          <ProtectedRoute role="admin">
            <AccountsInformationPage />
          </ProtectedRoute>
        } />
        <Route path='/admin/account-information' element={
          <ProtectedRoute role="admin">
            <AccountInformationPage />
          </ProtectedRoute>
        } />
        <Route path='/admin/customer-information' element={
          <ProtectedRoute role="admin">
            <CustomerInformationPage />
          </ProtectedRoute>
        } />
        <Route path='/admin/products-services' element={
          <ProtectedRoute role="admin">
            <AdminProductsServicesPage />
          </ProtectedRoute>
        } />
        <Route path='/admin/settings' element={
          <ProtectedRoute role="admin">
            <AdminSettingsPage />
          </ProtectedRoute>
        } /> 
        <Route path='/admin/credit' element={
          <ProtectedRoute role="admin">
            <CreditPage />
          </ProtectedRoute>
        } />
        <Route path='/admin/deposit' element={
          <ProtectedRoute role="admin">
            <DepositPage />
          </ProtectedRoute>
        } />
        <Route path='/admin/history' element={
          <ProtectedRoute role="admin">
            <AdminHistoryPage />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
