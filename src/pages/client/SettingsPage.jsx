import Navbar from "../../components/client/home/Navbar";
import Sidebar from "../../components/client/home/Sidebar";
import SettingsForm from "../../components/client/settings/SettingsForm";

const SettingsPage = () => {
  // Obtener el user desde el localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const customerId = user?._id;

  // Verificar si customerId existe
  if (!customerId) {
    console.error("Customer ID not found in user object");
    return <p>Error: Customer ID not found. Please log in again.</p>;
  }

  return (
    <div className="flex min-h-screen text-white bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="mb-6 text-2xl font-bold">Account Settings</h1>
          <SettingsForm customerId={customerId} />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
