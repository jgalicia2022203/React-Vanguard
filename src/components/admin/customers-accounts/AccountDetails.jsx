/* eslint-disable react/prop-types */
const AccountDetails = ({ account }) => {
  if (!account) {
    return <div>Loading...</div>;
  }

  const { account_no, balance, status } = account;

  return (
    <div className="mb-6">
      <p>
        <strong>Account No.:</strong> {account_no}
      </p>
      <p>
        <strong>Balance:</strong> {balance}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
};

export default AccountDetails;
