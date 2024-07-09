/* eslint-disable react/prop-types */
const AdminTransactionList = ({ transactions }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Recent Transactions</h2>
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <li key={transaction._id} className="py-2">
            <p className="text-gray-700">
              {transaction.transaction_type}: ${transaction.amount.toFixed(2)}
            </p>
            <p className="text-gray-500 text-sm">{transaction.date}</p>
            <p className="text-gray-500 text-sm">Account No: {transaction.account_no}</p>
            {transaction.to_account_no && (
              <p className="text-gray-500 text-sm">To Account No: {transaction.to_account_no}</p>
            )}
            {transaction.description && (
              <p className="text-gray-500 text-sm">Description: {transaction.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminTransactionList;
