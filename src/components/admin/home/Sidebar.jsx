import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="w-64 h-screen p-6 bg-gray-900">
      <div className="flex items-center gap-3 mb-10 text-center">
        <img src="/img/Vanguard.svg" alt="Vanguard" className="w-10" />
        <h1 className="text-xl font-bold">Vanguard</h1>
      </div>
      <ul className="space-y-4">
        <li>
          <Link
            to="/admin/home"
            className="block p-2 rounded hover:bg-gray-800"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/admin/customers"
            className="block p-2 rounded hover:bg-gray-800"
          >
            Customers & Acc.
          </Link>
        </li>
        <li>
          <Link
            to="/admin/deposit"
            className="block p-2 rounded hover:bg-gray-800"
          >
            Deposit
          </Link>
        </li>
        <li>
          <Link
            to="/admin/credit"
            className="block p-2 rounded hover:bg-gray-800"
          >
            Credits
          </Link>
        </li>
        <li>
          <Link
            to="/admin/products-services"
            className="block p-2 rounded hover:bg-gray-800"
          >
            Products & Services
          </Link>
        </li>
        <li>
          <Link
            to="/admin/settings"
            className="block p-2 rounded hover:bg-gray-800"
          >
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
