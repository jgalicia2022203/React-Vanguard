/* eslint-disable react/prop-types */
const ConfirmationModal = ({
  accountNo,
  toAccountNo,
  amount,
  description,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-black rounded-lg">
        <h2 className="mb-4 text-xl font-bold">Confirm Transfer</h2>
        <p>
          <strong>From Account No:</strong> {accountNo}
        </p>
        <p>
          <strong>To Account No:</strong> {toAccountNo}
        </p>
        <p>
          <strong>Amount:</strong> ${amount}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <div className="flex justify-end mt-4 space-x-4">
          <button
            onClick={onCancel}
            className="p-2 text-white bg-gray-500 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
