/* eslint-disable react/prop-types */
const CartItemList = ({ cartItems }) => {
  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <div key={item._id} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">{item.product_service_id.name}</h2>
            <p className="text-gray-700">Quantity: {item.quantity}</p>
          </div>
          <p className="text-gray-900 font-bold">${(item.product_service_id.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
