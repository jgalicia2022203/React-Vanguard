import { useEffect, useState } from "react";
import AdminTransactionList from "../../components/admin/history/AdminTransactionList";
import Navbar from "../../components/admin/home/Navbar";
import Sidebar from "../../components/admin/home/Sidebar";
import { getTransactionHistory } from "../../services/axios";

const AdminHistoryPage = () => {
  const [transactions, setTransactions] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const accountNo = user?.account_no;
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactionHistory(accountNo);
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="flex min-h-screen text-white bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="mb-6 text-2xl font-bold">Your History</h1>
          <AdminTransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default AdminHistoryPage;
