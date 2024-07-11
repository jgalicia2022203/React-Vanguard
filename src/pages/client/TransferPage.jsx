import Navbar from "../../components/client/home/Navbar";
import Sidebar from "../../components/client/home/Sidebar";
import TransferForm from "../../components/client/transfer/TransferForm";
const TransferPage = () => {
  return (
    <div className="flex min-h-screen text-white bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="mb-6 text-2xl font-bold">Who you wanna transfer?</h1>
          <TransferForm />
        </div>
      </div>
    </div>
  );
};

export default TransferPage;
