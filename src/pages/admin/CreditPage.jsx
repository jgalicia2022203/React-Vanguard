import CreditForm from "../../components/admin/credit/CreditForm";
import Navbar from "../../components/admin/home/Navbar";
import Sidebar from "../../components/admin/home/Sidebar";

const CreditPage = () => {
  return (
    <div className="flex min-h-screen text-white bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="mb-6 text-2xl font-bold">Register a credit</h1>
          <CreditForm />
        </div>
      </div>
    </div>
  );
};

export default CreditPage;
