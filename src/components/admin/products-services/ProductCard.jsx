/* eslint-disable react/prop-types */
import { useState } from "react";
import DeleteProductButton from "./DeleteProductButton";
import EditProductForm from "./EditProductForm";

const ProductCard = ({ product }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    setIsDeleting(true);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  const handleUpdateProduct = () => {};

  return (
    <div className="p-4 border rounded-lg">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="object-cover w-full h-40 mb-4"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p>{product.description}</p>
      <p className="text-right">{product.price}</p>
      <div className="flex justify-end mt-4 space-x-4">
        <button
          onClick={handleEditClick}
          className="p-2 bg-yellow-500 rounded hover:bg-yellow-600"
        >
          ✏️
        </button>
        <button
          onClick={handleDeleteClick}
          className="p-2 bg-red-500 rounded hover:bg-red-600"
        >
          🗑️
        </button>
      </div>
      {isEditing && (
        <EditProductForm
          product={product}
          onClose={handleCloseModal}
          onUpdate={handleUpdateProduct}
        />
      )}
      {isDeleting && (
        <DeleteProductButton
          productId={product._id}
          onClose={() => setIsDeleting(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;
