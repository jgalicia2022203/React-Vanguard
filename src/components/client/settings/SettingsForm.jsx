/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getCustomerById, updateCustomer } from "../../../services/axios";

const SettingsForm = ({ customerId }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "", // Campo para nueva contraseña
    confirmPassword: "", // Campo para confirmar nueva contraseña
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    cell_phone: "",
    email: "",
    work_name: "",
    monthly_income: "",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        if (!customerId) {
          throw new Error("Customer ID is not defined");
        }
        const customerData = await getCustomerById(customerId);
        setFormData((prevData) => ({
          ...prevData,
          ...customerData.customer,
          password: "", // No mostrar la contraseña cifrada
          confirmPassword: "", // Campo para confirmar nueva contraseña
        }));
      } catch (error) {
        toast.error("Failed to fetch settings");
      }
    };

    fetchSettings();
  }, [customerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const { confirmPassword, ...dataToUpdate } = formData;
      await updateCustomer(customerId, dataToUpdate);
      toast.success("Settings updated successfully");
    } catch (error) {
      toast.error(`Failed to update settings: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 text-white">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 text-white bg-gray-800 rounded"
        />
      </div>
      <div>
        <label className="block mb-1 text-white">New Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 text-white bg-gray-800 rounded"
        />
      </div>
      <div>
        <label className="block mb-1 text-white">Confirm New Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 text-white bg-gray-800 rounded"
        />
      </div>
      <div>
        <label className="block mb-1 text-white">Address</label>
        <div className="space-y-2">
          <input
            type="text"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            placeholder="Street"
            className="w-full p-2 text-white bg-gray-800 rounded"
          />
          <input
            type="text"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full p-2 text-white bg-gray-800 rounded"
          />
          <input
            type="text"
            name="address.state"
            value={formData.address.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full p-2 text-white bg-gray-800 rounded"
          />
          <input
            type="text"
            name="address.zip"
            value={formData.address.zip}
            onChange={handleChange}
            placeholder="Zip"
            className="w-full p-2 text-white bg-gray-800 rounded"
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 text-white">Cellphone</label>
        <input
          type="text"
          name="cell_phone"
          value={formData.cell_phone}
          onChange={handleChange}
          className="w-full p-2 text-white bg-gray-800 rounded"
        />
      </div>
      <div>
        <label className="block mb-1 text-white">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email_address}
          onChange={handleChange}
          className="w-full p-2 text-white bg-gray-800 rounded"
        />
      </div>
      <div>
        <label className="block mb-1 text-white">Work Name</label>
        <input
          type="text"
          name="work_name"
          value={formData.work_name}
          onChange={handleChange}
          className="w-full p-2 text-white bg-gray-800 rounded"
        />
      </div>
      <div>
        <label className="block mb-1 text-white">Monthly Income</label>
        <input
          type="number"
          name="monthly_income"
          value={formData.monthly_income}
          onChange={handleChange}
          className="w-full p-2 text-white bg-gray-800 rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
};

export default SettingsForm;
