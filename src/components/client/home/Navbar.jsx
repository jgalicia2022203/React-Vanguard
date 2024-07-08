import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <div>
        <button className="bg-gray-700 p-2 rounded">USD</button>
      </div>
      <div className="flex items-center space-x-4">
       <Link to="/cart" className="flex-1 p-4 bg-gray-800 rounded text-center">
     
        <span>Cart</span>
      </Link>
        <div className="relative">
          <button className="bg-gray-700 p-2 rounded">
            <img src="/img/user.png" alt="User" className="w-8 h-8 rounded-full" />
          </button>
          {/* Dropdown menu */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
