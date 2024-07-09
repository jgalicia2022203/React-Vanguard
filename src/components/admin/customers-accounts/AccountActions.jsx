/* eslint-disable react/prop-types */
import { closeAccount, deactivateAccount } from '../../../services/axios';

const AccountActions = ({ accountId }) => {
  const handleDeactivate = async () => {
    try {
      await deactivateAccount(accountId);
      alert('Account deactivated');
    } catch (error) {
      console.error('Error deactivating account:', error);
      alert('Failed to deactivate account');
    }
  };

  const handleClose = async () => {
    try {
      await closeAccount(accountId);
      alert('Account closed');
    } catch (error) {
      console.error('Error closing account:', error);
      alert('Failed to close account');
    }
  };

  return (
    <div className="mt-2 flex space-x-2">
      <button
        onClick={handleDeactivate}
        className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600"
      >
        Deactivate
      </button>
      <button
        onClick={handleClose}
        className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
      >
        Close
      </button>
    </div>
  );
};

export default AccountActions;
