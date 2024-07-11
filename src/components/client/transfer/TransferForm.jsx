import { useState } from "react";
import toast from "react-hot-toast";
import { transfer } from "../../../services/axios";
import ConfirmationModal from "./ConfirmationModal"; // Asegúrate de tener el modal de confirmación

const TransferForm = () => {
  const [toAccountNo, setToAccountNo] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);

  const accountNo = JSON.parse(localStorage.getItem("user")).account_no;

  const handleTransfer = async (e) => {
    e.preventDefault();
    try {
      await transfer({
        account_no: accountNo,
        to_account_no: toAccountNo,
        amount,
        description,
      });
      toast.success("Transfer completed successfully");
      setToAccountNo("");
      setAmount("");
      setDescription("");
      setIsConfirming(false);
    } catch (error) {
      toast.error(`Failed to transfer: ${error.message}`);
    }
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setIsConfirming(true);
  };

  return (
    <div>
      <form onSubmit={handleConfirm} className="space-y-4">
        <input
          type="text"
          placeholder="Recipient's Account no."
          value={toAccountNo}
          onChange={(e) => setToAccountNo(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded"
        />
        <input
          type="number"
          placeholder="Amount to transfer"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 bg-gray-800 rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          Transfer
        </button>
      </form>
      {isConfirming && (
        <ConfirmationModal
          accountNo={accountNo}
          toAccountNo={toAccountNo}
          amount={amount}
          description={description}
          onConfirm={handleTransfer}
          onCancel={() => setIsConfirming(false)}
        />
      )}
    </div>
  );
};

export default TransferForm;
