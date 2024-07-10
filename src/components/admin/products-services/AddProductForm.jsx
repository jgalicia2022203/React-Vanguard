/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { addProduct } from "../../../services/axios";

const AddProductForm = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = await addProduct(formData);
      onAdd(newProduct);
      toast.success("Product added successfully");
      onClose();
    } catch (error) {
      toast.error(`Failed to add product: ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-3/4 p-6 bg-white rounded-lg lg:w-1/2">
        <h2 className="mb-4 text-2xl font-bold">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="p-2 bg-gray-500 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="p-2 bg-blue-500 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
