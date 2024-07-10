import DepositForm from "../../components/admin/deposit/DepositForm";
import Navbar from "../../components/admin/home/Navbar";
import Sidebar from "../../components/admin/home/Sidebar";

const DepositPage = () => {
  return (
    <div className="flex min-h-screen text-white bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="mb-6 text-2xl font-bold">Register a deposit</h1>
          <DepositForm />
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
