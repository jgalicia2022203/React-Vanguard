import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <div>
        <button className="bg-gray-700 p-2 rounded">USD</button>
      </div>
      <div className="flex items-center gap-4">
       <Link to="/cart" className="flex items-center">
          <img src="../../public/img/cart.svg" className='w-6 h-6' alt="Cart" />
      </Link>
        <div className="flex items-center">
          <button className="rounded-full items-center">
            <img src="../public/img/user.png" alt="User" className="w-8 h-8 rounded-full"/>
          </button>
          {/* Dropdown menu */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
