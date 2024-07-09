import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ username, password });
      localStorage.setItem('user', JSON.stringify(response.customer));
      localStorage.setItem('token', response.token);
      toast.success('Login successful');
      navigate('/home');
    } catch (error) {
      toast.error('Login failed: ' + error.msg);
    }
  };

  return (
    <div>
      <Toaster />
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 rounded bg-white text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-white text-black"
        />
        <button type="submit" className="w-full p-2 rounded bg-gray-700 hover:bg-gray-600">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
