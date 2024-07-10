import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ username, password });
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.customer));
      if (response.customer.role === "admin") {
        navigate("/admin/home");
      } else {
        navigate("/home");
      }
      toast.success("Login successful");
    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 text-black bg-white rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 text-black bg-white rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-gray-700 rounded hover:bg-gray-600"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
