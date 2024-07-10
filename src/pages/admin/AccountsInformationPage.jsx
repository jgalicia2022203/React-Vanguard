import { useEffect, useState } from "react";
import AccountsTable from "../../components/admin/customers-accounts/AccountsTable";
import SearchBar from "../../components/admin/customers-accounts/SearchBar";
import Navbar from "../../components/admin/home/Navbar";
import Sidebar from "../../components/admin/home/Sidebar";
import { listAccounts } from "../../services/axios";

const AccountsInformationPage = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await listAccounts();
        setAccounts(data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div className="flex min-h-screen text-white bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="mb-6 text-2xl font-bold">Accounts Information</h1>
          <SearchBar setAccounts={setAccounts} />
          <AccountsTable accounts={accounts} />
        </div>
      </div>
    </div>
  );
};

export default AccountsInformationPage;
