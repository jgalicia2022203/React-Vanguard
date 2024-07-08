import { Link } from 'react-router-dom';

const ActionButtons = () => {
  return (
    <div className="flex space-x-4">
      <Link to="/favorites" className="flex-1 p-4 bg-gray-800 rounded text-center">
        <div className="text-2xl mb-2">🔖</div>
        <span>Favorite Accounts</span>
      </Link>
      <Link to="/transactions" className="flex-1 p-4 bg-gray-800 rounded text-center">
        <div className="text-2xl mb-2">📜</div>
        <span>History Transactions</span>
      </Link>
    </div>
  );
};

export default ActionButtons;
