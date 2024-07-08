import { useEffect, useState } from 'react';
import CartItemList from '../../components/client/cart/CartItemList';
import CartSummary from '../../components/client/cart/CartSummary';
import { fetchCartItems } from '../../services/axios';

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await fetchCartItems();
        setCartItems(response.data.items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    getCartItems();
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.product_service_id.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <CartItemList cartItems={cartItems} />
      <CartSummary total={total} />
    </div>
  );
};

export default ShoppingCartPage;
