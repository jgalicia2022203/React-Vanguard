/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { updateCustomer } from "../../../services/axios";

const EditCustomerForm = ({ customer, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({ ...customer });

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
      const updatedCustomer = await updateCustomer(formData._id, formData);
      onUpdate(updatedCustomer);
      toast.success("Customer updated successfully");
      onClose();
    } catch (error) {
      toast.error(`Failed to update customer: ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-3/4 p-6 bg-black rounded-lg lg:w-1/2">
        <h2 className="mb-4 text-2xl font-bold text-white">Edit Customer</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Cellphone</label>
              <input
                type="text"
                name="cell_phone"
                value={formData.cell_phone}
                onChange={handleChange}
                placeholder="Cellphone"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Email Address</label>
              <input
                type="email"
                name="email_address"
                value={formData.email_address}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-white">ID</label>
              <input
                type="text"
                name="gov_id"
                value={formData.gov_id}
                onChange={handleChange}
                placeholder="ID"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Work Name</label>
              <input
                type="text"
                name="work_name"
                value={formData.work_name}
                onChange={handleChange}
                placeholder="Work Name"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Monthly Income</label>
              <input
                type="number"
                name="monthly_income"
                value={formData.monthly_income}
                onChange={handleChange}
                placeholder="Monthly Income"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Street</label>
              <input
                type="text"
                name="address.street"
                value={formData.address.street}
                onChange={handleChange}
                placeholder="Street"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-white">City</label>
              <input
                type="text"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-white">State</label>
              <input
                type="text"
                name="address.state"
                value={formData.address.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-white">Zip</label>
              <input
                type="text"
                name="address.zip"
                value={formData.address.zip}
                onChange={handleChange}
                placeholder="Zip"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-white bg-gray-500 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomerForm;
