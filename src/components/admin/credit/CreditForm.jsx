import { useState } from "react";
import toast from "react-hot-toast";
import { requestCredit } from "../../../services/axios";

const CreditForm = () => {
  const [formData, setFormData] = useState({
    account_no: "",
    amount: "",
    description: "",
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
      await requestCredit(formData);
      toast.success("Credit registered successfully");
      setFormData({
        account_no: "",
        amount: "",
        description: "",
      });
    } catch (error) {
      toast.error(`Failed to register credit: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 text-white">Account no.</label>
        <input
          type="text"
          name="account_no"
          value={formData.account_no}
          onChange={handleChange}
          className="w-full p-2 text-white bg-gray-800 rounded"
        />
      </div>
      <div>
        <label className="block mb-1 text-white">Amount to deposit</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-2 text-white bg-gray-800 rounded"
        />
      </div>
      <div>
        <label className="block mb-1 text-white">Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 text-white bg-gray-800 rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 rounded hover:bg-blue-700"
      >
        Credit
      </button>
    </form>
  );
};

export default CreditForm;
