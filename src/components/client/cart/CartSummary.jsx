/* eslint-disable react/prop-types */
import { purchaseCart } from '../../../services/axios';

const CartSummary = ({ total }) => {
  const handlePurchase = async () => {
    try {
      await purchaseCart();
      alert('Purchase successful');
    } catch (error) {
      console.error('Error making purchase:', error);
      alert('Failed to make purchase');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <h2 className="text-lg font-bold">Total: ${total.toFixed(2)}</h2>
      <button
        onClick={handlePurchase}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Buy
      </button>
    </div>
  );
};

export default CartSummary;
