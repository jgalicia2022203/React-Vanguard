import { Link } from "react-router-dom";

const AccountOptions = () => {
  return (
    <div className="flex space-x-2">
      <Link className="p-2 bg-blue-500 rounded">View</Link>
      <button className="p-2 bg-yellow-500 rounded">Deactivate</button>
      <button className="p-2 bg-red-500 rounded">Close</button>
    </div>
  );
};

export default AccountOptions;
