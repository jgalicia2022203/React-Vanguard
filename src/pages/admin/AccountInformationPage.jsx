import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountActions from "../../components/admin/customers-accounts/AccountActions";
import AccountDetails from "../../components/admin/customers-accounts/AccountDetails";
import RecentTransactionsList from "../../components/admin/customers-accounts/RecentTransactionsList";
import Navbar from "../../components/admin/home/Navbar";
import Sidebar from "../../components/admin/home/Sidebar";
import { getAccountById } from "../../services/axios";

const AccountInformationPage = () => {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const data = await getAccountById(id);
        setAccount(data.account);
        setTransactions(data.transactions);
      } catch (error) {
        console.error("Error fetching account:", error);
      }
    };

    fetchAccount();
  }, [id]);

  if (!account) {
    return <div>Loading...</div>;
  }

  const customerId = account.customer_id._id || account.customer_id;

  return (
    <div className="flex min-h-screen text-white bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="mb-6 text-2xl font-bold">Account Information</h1>
          <div className="mb-6">
            <button
              onClick={() =>
                navigate(`/admin/customer-information/${customerId}`)
              }
              className="p-2 bg-gray-700 rounded hover:bg-gray-600"
            >
              View Customer Info
            </button>
          </div>
          <AccountDetails account={account} />
          <AccountActions accountId={account._id} />
          <RecentTransactionsList transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default AccountInformationPage;
