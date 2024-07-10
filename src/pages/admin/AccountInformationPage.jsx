import { useEffect, useState } from "react";
import AccountActions from "../../components/admin/customers-accounts/AccountActions";
import AccountDetails from "../../components/admin/customers-accounts/AccountDetails";
import { listAccounts } from "../../services/axios";

const AccountInformationPage = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const getAccounts = async () => {
      try {
        const response = await listAccounts();
        setAccounts(response.data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    getAccounts();
  }, []);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Accounts Information</h1>
      {accounts.map((account) => (
        <div
          key={account._id}
          className="p-4 mb-4 bg-white rounded-lg shadow-md"
        >
          <AccountDetails accountId={account._id} />
          <AccountActions accountId={account._id} />
        </div>
      ))}
    </div>
  );
};

export default AccountInformationPage;
