/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const AccountsTable = ({ accounts }) => {
  const navigate = useNavigate();

  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="p-2">ID</th>
          <th className="p-2">Account No.</th>
          <th className="p-2">Balance</th>
          <th className="p-2">Status</th>
          <th className="p-2">Options</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account) => (
          <tr key={account._id}>
            <td className="p-2">{account._id}</td>
            <td className="p-2">{account.account_no}</td>
            <td className="p-2">{account.balance}</td>
            <td className="p-2">{account.status}</td>
            <td className="flex flex-row gap-2 p-2">
              <button
                onClick={() =>
                  navigate(`/admin/account-information/${account._id}`)
                }
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountsTable;
