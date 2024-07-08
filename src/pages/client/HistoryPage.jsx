import { useEffect, useState } from 'react';
import TransactionList from '../../components/client/history/TransactionList';
import { getTransactionHistory } from '../../services/axios';

const HistoryPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const response = await getTransactionHistory();
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
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default HistoryPage;
