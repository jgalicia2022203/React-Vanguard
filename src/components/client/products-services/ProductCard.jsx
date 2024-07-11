/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { addItemToCart } from "../../../services/axios";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const customer_id = user._id;

      const response = await addItemToCart({
        customer_id,
        product_service_id: product._id,
        quantity,
      });

      toast.success("Item added to cart successfully!");
    } catch (error) {
      toast.error(`Error adding item to cart: ${error.message}`);
    }
  };

  return (
    <div className="p-4 bg-gray-800 rounded">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="object-cover w-full h-48 mb-4 rounded"
      />
      <h2 className="mb-2 text-xl font-bold">{product.name}</h2>
      <p className="mb-2 text-gray-400">{product.description}</p>
      <p className="mb-2 text-lg font-bold">${product.price}</p>
      <p
        className={`text-sm ${
          product.status === "in stock" ? "text-green-500" : "text-red-500"
        }`}
      >
        {product.status}
      </p>
      <div className="flex items-center mt-4">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          className="w-16 p-2 mr-2 text-black bg-gray-200 rounded"
        />
        <button
          onClick={handleAddToCart}
          className="p-2 bg-blue-500 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
