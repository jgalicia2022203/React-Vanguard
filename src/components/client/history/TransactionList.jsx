/* eslint-disable react/prop-types */
const TransactionList = ({ transactions }) => {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div
          key={transaction._id}
          className="flex justify-between p-4 bg-gray-800 rounded-lg"
        >
          <span>{new Date(transaction.date).toLocaleDateString()}</span>
          <span>{transaction.description}</span>
          <span>{transaction.amount.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
