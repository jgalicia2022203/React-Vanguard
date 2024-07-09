import { useEffect, useState } from 'react';
import AccountActions from '../../components/admin/customers-accounts/AccountActions';
import AccountDetails from '../../components/admin/customers-accounts/AccountDetails';
import { fetchAccounts } from '../../services/axios';

const AccountInformationPage = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const getAccounts = async () => {
      try {
        const response = await fetchAccounts();
        setAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    getAccounts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Accounts Information</h1>
      {accounts.map((account) => (
        <div key={account._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <AccountDetails accountId={account._id} />
          <AccountActions accountId={account._id} />
        </div>
      ))}
    </div>
  );
};

export default AccountInformationPage;
