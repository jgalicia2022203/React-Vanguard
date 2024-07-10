import { useEffect, useState } from 'react';
import AdminTransactionList from '../../components/admin/history/AdminTransactionList';
import { fetchAllTransactions } from '../../services/axios';

const AdminHistoryPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const response = await fetchAllTransactions();
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    getTransactions();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
      <AdminTransactionList transactions={transactions} />
    </div>
  );
};

export default AdminHistoryPage;