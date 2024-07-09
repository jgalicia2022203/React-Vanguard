import AccountsInformationButton from '../../components/admin/customers-accounts/AccountsInformationButton';
import RegisterCustomerButton from '../../components/admin/customers-accounts/RegisterCustomerButton';
import Navbar from '../../components/admin/home/Navbar';
import Sidebar from '../../components/admin/home/Sidebar';

const CustomerAccountsPage = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Accounts & Customer Management</h1>
          <div className="flex space-x-4">
            <RegisterCustomerButton />
            <AccountsInformationButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAccountsPage;
