/* eslint-disable react/prop-types */
const RecentTransactionsList = ({ transactions }) => {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Recent Transactions</h2>
      <ul>
        {transactions.slice(0, 5).map((transaction) => (
          <li key={transaction._id} className="p-2 mb-2 bg-gray-800 rounded">
            <p>{new Date(transaction.date).toLocaleString()}</p>
            <p>{transaction.description}</p>
            <p>{transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactionsList;
