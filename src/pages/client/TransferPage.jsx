import Sidebar from '../../components/client/home/Sidebar';
import TransferForm from '../../components/client/transfer/TransferForm';

const TransferPage = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Who you wanna transfer?</h1>
        <TransferForm />
      </div>
    </div>
  );
};

export default TransferPage;
