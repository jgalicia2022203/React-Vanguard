import DepositForm from '../../components/admin/deposit/DepositForm';

const DepositPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Make a Deposit</h1>
      <DepositForm />
    </div>
  );
};

export default DepositPage;
