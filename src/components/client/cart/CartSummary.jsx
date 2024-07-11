/* eslint-disable react/prop-types */
import { purchaseCart } from "../../../services/axios";

const CartSummary = ({ total }) => {
  const handlePurchase = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const account_no = user.account_no;
      console.log("Purchasing with account_no:", account_no); // Log para verificar el account_no

      await purchaseCart({ account_no });
      alert("Purchase successful");
    } catch (error) {
      console.error("Error making purchase:", error);
      alert("Failed to make purchase");
    }
  };

  return (
    <div className="p-4 mt-4 bg-black rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Total: ${total.toFixed(2)}</h2>
      <button
        onClick={handlePurchase}
        className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Buy
      </button>
    </div>
  );
};

export default CartSummary;
