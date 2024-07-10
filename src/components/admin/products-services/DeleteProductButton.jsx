/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { deleteProduct } from "../../../services/axios";

const DeleteProductButton = ({ productId, onClose }) => {
  const handleDelete = async () => {
    try {
      await deleteProduct(productId);
      toast.success("Product deleted successfully");
      onClose();
    } catch (error) {
      toast.error(`Failed to delete product: ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 text-white bg-black rounded-lg">
        <h2 className="mb-4 text-2xl font-bold">Confirm Deletion</h2>
        <p>Are you sure you want to delete this product?</p>
        <div className="flex justify-end mt-4 space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="p-2 bg-gray-500 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="p-2 bg-red-500 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductButton;
