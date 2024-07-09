/* eslint-disable react/prop-types */
import CustomerDetails from '../../components/admin/customers-accounts/CustomerDetails';
import EditCustomerForm from '../../components/admin/customers-accounts/EditCustomerForm';

const CustomerInformationPage = ({ customerId }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Information</h1>
      <CustomerDetails customerId={customerId} />
      <EditCustomerForm customerId={customerId} />
    </div>
  );
};

export default CustomerInformationPage;
