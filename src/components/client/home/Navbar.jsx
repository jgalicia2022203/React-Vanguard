import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <div>
        <button className="p-2 bg-gray-700 rounded">USD</button>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/cart" className="flex items-center">
          <img src="../../public/img/cart.svg" className="w-6 h-6" alt="Cart" />
        </Link>
        <div className="relative flex items-center">
          <button
            onClick={toggleDropdown}
            className="rounded-full focus:outline-none"
          >
            <img
              src="../public/img/user.png"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 w-48 mt-2 bg-white rounded shadow-lg">
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left text-black hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
