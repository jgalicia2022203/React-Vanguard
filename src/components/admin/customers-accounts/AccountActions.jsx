/* eslint-disable react/prop-types */
import { deactivateAccount, closeAccount } from "../../../services/axios";

const AccountActions = ({ accountId }) => {
  const handleDeactivate = async () => {
    try {
      await deactivateAccount(accountId);
      alert("Account deactivated");
    } catch (error) {
      console.error("Error deactivating account:", error);
    }
  };

  const handleClose = async () => {
    try {
      await closeAccount(accountId);
      alert("Account closed");
    } catch (error) {
      console.error("Error closing account:", error);
    }
  };

  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={handleDeactivate}
        className="px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-400"
      >
        Deactivate
      </button>
      <button
        onClick={handleClose}
        className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-400"
      >
        Close
      </button>
    </div>
  );
};

export default AccountActions;
