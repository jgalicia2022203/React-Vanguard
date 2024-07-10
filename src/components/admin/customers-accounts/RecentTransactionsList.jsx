/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getTransactionHistory } from "../../../services/axios";

const RecentTransactionsList = ({ accountId }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactionHistory(accountId);
        setTransactions(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [accountId]);

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Recent Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id} className="p-2 mb-2 bg-gray-800 rounded">
            <p>{transaction.date}</p>
            <p>{transaction.description}</p>
            <p>{transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactionsList;
