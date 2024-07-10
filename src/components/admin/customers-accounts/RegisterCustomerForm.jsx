import { useState } from "react";
import toast from "react-hot-toast";
import { createCustomer } from "../../../services/axios";

const RegisterCustomerForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [workName, setWorkName] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [role, setRole] = useState("client");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const customerData = {
        name,
        username,
        gov_id: id,
        address: {
          street,
          city,
          state,
          zip,
        },
        cell_phone: cellphone,
        email_address: email,
        password,
        work_name: workName,
        monthly_income: monthlyIncome,
        role,
      };
      const response = await createCustomer(customerData);
      toast.success(response.msg);
    } catch (error) {
      toast.error(`Failed to register customer: ${error}`);
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="grid grid-cols-2 gap-4 space-y-4"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded"
      />
      <input
        type="text"
        placeholder="Cellphone"
        value={cellphone}
        onChange={(e) => setCellphone(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded"
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded"
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded"
      />
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded"
      />
      <input
        type="text"
        placeholder="Street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded"
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded"
      />
      <input
        type="text"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded"
      />
      <input
        type="text"
        placeholder="Zip"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded"
      />
      <input
        type="text"
        placeholder="Work Name"
        value={workName}
        onChange={(e) => setWorkName(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded"
      />
      <input
        type="number"
        placeholder="Monthly Income"
        value={monthlyIncome}
        onChange={(e) => setMonthlyIncome(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded"
      />
      <div className="flex items-center space-x-4">
        <label>
          <input
            type="radio"
            value="client"
            checked={role === "client"}
            onChange={(e) => setRole(e.target.value)}
            className="mr-2"
          />
          Client
        </label>
        <label>
          <input
            type="radio"
            value="administrator"
            checked={role === "administrator"}
            onChange={(e) => setRole(e.target.value)}
            className="mr-2"
          />
          Administrator
        </label>
      </div>
      <button
        type="submit"
        className="w-full col-span-2 p-2 bg-gray-700 rounded hover:bg-gray-600"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterCustomerForm;
