const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <div>
        <button className="p-2 bg-gray-700 rounded">USD</button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="rounded-full">
            <img
              src="/img/user.png"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          </button>
          {/* Dropdown menu */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
