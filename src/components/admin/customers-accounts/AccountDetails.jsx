/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { getAccountById } from '../../../services/axios';

const AccountDetails = ({ accountId }) => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await getAccountById(accountId);
        setAccount(response.data);
      } catch (error) {
        console.error('Error fetching account details:', error);
      }
    };

    fetchAccount();
  }, [accountId]);

  if (!account) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-lg font-bold">Account Details</h2>
      <p>Account No: {account.account_no}</p>
      <p>Balance: ${account.balance.toFixed(2)}</p>
      <p>Status: {account.status}</p>
    </div>
  );
};

export default AccountDetails;
