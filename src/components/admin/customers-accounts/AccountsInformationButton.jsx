import { Link } from 'react-router-dom';

const AccountsInformationButton = () => {
  return (
    <Link to="/admin/accounts-information" className="flex-1 p-4 bg-gray-800 rounded text-center">
      <div className="text-2xl mb-2">📄</div>
      <span>Accounts Information</span>
    </Link>
  );
};

export default AccountsInformationButton;
