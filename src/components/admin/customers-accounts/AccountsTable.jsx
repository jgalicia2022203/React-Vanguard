import AccountOptions from './AccountOptions';

const accounts = [
  // Datos ficticios de ejemplo
  { id: '23123122312', accountNo: '543523432334', balance: '700.00', status: 'Active' },
  { id: '3213123123123', accountNo: '65487089123', balance: '500.00', status: 'Inactive' },
];

const AccountsTable = () => {
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
          <tr key={account.id}>
            <td className="p-2">{account.id}</td>
            <td className="p-2">{account.accountNo}</td>
            <td className="p-2">{account.balance}</td>
            <td className="p-2">{account.status}</td>
            <td className="p-2"><AccountOptions /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountsTable;
