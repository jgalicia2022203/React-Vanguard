/* eslint-disable react/prop-types */
import { addToCart } from '../../../services/axios';

const AddToCartButton = ({ productId }) => {
  const handleAddToCart = async () => {
    try {
      await addToCart(productId);
      alert('Product added to cart');
    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('Failed to add product to cart');
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
