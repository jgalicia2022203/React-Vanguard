/* eslint-disable react/prop-types */
const CartItemList = ({ cartItems }) => {
  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between p-4 bg-black rounded-lg shadow-md"
        >
          <div>
            <h2 className="text-lg font-bold">
              {item.product_service_id.name}
            </h2>
            <p className="text-gray-500">Quantity: {item.quantity}</p>
          </div>
          <p className="font-bold text-gray-500">
            ${(item.product_service_id.price * item.quantity).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
