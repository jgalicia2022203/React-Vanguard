
import { useState } from 'react';

const TransferForm = () => {
  const [accountNo, setAccountNo] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    // Lógica de transferencia
  };

  return (
    <form onSubmit={handleTransfer} className="space-y-4">
      <input
        type="text"
        placeholder="Account no."
        value={accountNo}
        onChange={(e) => setAccountNo(e.target.value)}
        className="w-full p-2 rounded bg-gray-800"
      />
      <input
        type="number"
        placeholder="Amount to transfer"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 rounded bg-gray-800"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded bg-gray-800"
      />
      <button type="submit" className="w-full p-2 rounded bg-gray-700 hover:bg-gray-600">
        Transfer
      </button>
    </form>
  );
};

export default TransferForm;
