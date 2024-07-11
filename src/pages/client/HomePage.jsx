import { useEffect, useState } from "react";
import ActionButtons from "../../components/client/home/ActionButtons";
import BalanceInfo from "../../components/client/home/BalanceInfo";
import Navbar from "../../components/client/home/Navbar";
import Sidebar from "../../components/client/home/Sidebar";
import { getAccountByAccountNo } from "../../services/axios";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      const fetchAccount = async () => {
        try {
          const data = await getAccountByAccountNo(storedUser.account_no);
          setBalance(data.account.balance);
        } catch (error) {
          console.error("Error fetching account:", error);
        }
      };
      fetchAccount();
    }
  }, []);

  return (
    <div className="flex min-h-screen text-white bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-6">
          {user && <BalanceInfo username={user.username} balance={balance} />}
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
