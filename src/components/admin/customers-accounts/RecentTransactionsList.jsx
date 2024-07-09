/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { getTransactionHistory } from '../../../services/axios';

const RecentTransactionsList = ({ accountNo }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await getTransactionHistory(accountNo);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transaction history:', error);
      }
    };

    fetchTransactions();
  }, [accountNo]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <h2 className="text-lg font-bold mb-4">Recent Transactions</h2>
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <li key={transaction._id} className="py-2">
            <p className="text-gray-700">
              {transaction.transaction_type}: ${transaction.amount.toFixed(2)}
            </p>
            <p className="text-gray-500 text-sm">{transaction.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactionsList;
