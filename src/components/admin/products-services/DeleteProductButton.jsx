/* eslint-disable react/prop-types */
import { deleteProduct } from '../../../services/axios';

const DeleteProductButton = ({ productId }) => {
  const handleDelete = async () => {
    try {
      await deleteProduct(productId);
      alert('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
    >
      Delete
    </button>
  );
};

export default DeleteProductButton;
