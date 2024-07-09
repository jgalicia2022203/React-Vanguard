import RegisterCustomerForm from '../../components/admin/customers-accounts/RegisterCustomerForm';
import Navbar from '../../components/admin/home/Navbar';
import Sidebar from '../../components/admin/home/Sidebar';

const RegisterCustomerPage = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Register new Customer</h1>
          <RegisterCustomerForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterCustomerPage;
