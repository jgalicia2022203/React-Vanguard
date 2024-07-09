/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { getCustomerById } from '../../../services/axios';

const CustomerDetails = ({ customerId }) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await getCustomerById(customerId);
        setCustomer(response.data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomer();
  }, [customerId]);

  if (!customer) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-lg font-bold">Customer Details</h2>
      <p>Name: {customer.name}</p>
      <p>Username: {customer.username}</p>
      <p>Email: {customer.email_address}</p>
      <p>Phone: {customer.cell_phone}</p>
      <p>Address: {customer.address.street}, {customer.address.city}, {customer.address.state}, {customer.address.zip}</p>
      <p>Monthly Income: ${customer.monthly_income.toFixed(2)}</p>
    </div>
  );
};

export default CustomerDetails;
