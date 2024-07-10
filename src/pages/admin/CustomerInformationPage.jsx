import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomerDetails from "../../components/admin/customers-accounts/CustomerDetails";
import EditCustomerForm from "../../components/admin/customers-accounts/EditCustomerForm";
import Navbar from "../../components/admin/home/Navbar";
import Sidebar from "../../components/admin/home/Sidebar";
import { getCustomerById } from "../../services/axios";

const CustomerInformationPage = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await getCustomerById(id);
        setCustomer(data.customer);
      } catch (error) {
        console.error("Error fetching customer:", error);
      }
    };

    fetchCustomer();
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  const handleUpdateCustomer = (updatedCustomer) => {
    setCustomer(updatedCustomer);
    setIsEditing(false);
  };

  return (
    <div className="flex min-h-screen text-white bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="mb-6 text-2xl font-bold">Customer Information</h1>
          {customer ? (
            <>
              <CustomerDetails customer={customer} onEdit={handleEditClick} />
              {isEditing && (
                <EditCustomerForm
                  customer={customer}
                  onClose={handleCloseModal}
                  onUpdate={handleUpdateCustomer}
                />
              )}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerInformationPage;
