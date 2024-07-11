import { useEffect, useState } from "react";
import CartItemList from "../../components/client/cart/CartItemList";
import CartSummary from "../../components/client/cart/CartSummary";
import Navbar from "../../components/client/home/Navbar";
import Sidebar from "../../components/client/home/Sidebar";
import { fetchCartItems } from "../../services/axios";

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await fetchCartItems();
        setCartItems(response.items); // Ajusta esto según la estructura de tu respuesta
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    getCartItems();
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.product_service_id.price * item.quantity,
    0
  );

  return (
    <div className="flex min-h-screen text-white bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="mb-6 text-2xl font-bold">Your Shopping Cart</h1>
          <CartItemList cartItems={cartItems} />
          <CartSummary total={total} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
