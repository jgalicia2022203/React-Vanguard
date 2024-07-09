// src/pages/AdminMainPage.jsx
import ActionButtons from '../../components/admin/home/ActionButtons';
import Navbar from '../../components/admin/home/Navbar';
import Sidebar from '../../components/admin/home/Sidebar';

const AdminHomePage = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Welcome Back Admin!</h1>
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
