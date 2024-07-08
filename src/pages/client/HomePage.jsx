import ActionButtons from '../../components/client/home/ActionButtons';
import BalanceInfo from '../../components/client/home/BalanceInfo';
import Navbar from '../../components/client/home/Navbar';
import Sidebar from '../../components/client/home/Sidebar';

const HomePage = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-6">
          <BalanceInfo />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

