import AccountsTable from '../../components/admin/customers-accounts/AccountsTable';
import SearchBar from '../../components/admin/customers-accounts/SearchBar';
import Navbar from '../../components/admin/home/Navbar';
import Sidebar from '../../components/admin/home/Sidebar';

const AccountsInformationPage = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Accounts Information</h1>
          <SearchBar />
          <AccountsTable />
        </div>
      </div>
    </div>
  );
};

export default AccountsInformationPage;