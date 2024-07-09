import { Link } from 'react-router-dom';

const RegisterCustomerButton = () => {
  return (
    <Link to="/admin/register-customer" className="flex-1 p-4 bg-gray-800 rounded text-center">
      <div className="text-2xl mb-2">👤</div>
      <span>Register Customer</span>
    </Link>
  );
};

export default RegisterCustomerButton;
