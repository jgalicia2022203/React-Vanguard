import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="w-64 h-screen bg-gray-900 p-6">
      <div className="text-center mb-8">
        <img src="/img/logo.png" alt="Vanguard" className="w-16 mx-auto mb-4" />
        <h1 className="text-xl font-bold">Vanguard</h1>
      </div>
      <ul className="space-y-4">
        <li><Link to="/admin/home" className="block p-2 rounded hover:bg-gray-800">Home</Link></li>
        <li><Link to="/admin/customers" className="block p-2 rounded hover:bg-gray-800">Customers & Acc.</Link></li>
        <li><Link to="/admin/deposit" className="block p-2 rounded hover:bg-gray-800">Deposit</Link></li>
        <li><Link to="/admin/credit" className="block p-2 rounded hover:bg-gray-800">Credits</Link></li>
        <li><Link to="/admin/products-services" className="block p-2 rounded hover:bg-gray-800">Products & Services</Link></li>
        <li><Link to="/admin/settings" className="block p-2 rounded hover:bg-gray-800">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
