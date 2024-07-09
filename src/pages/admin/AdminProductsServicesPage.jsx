import ProductList from '../../components/admin/products-services/ProductList';
import AddProductForm from '../../components/admin/products-services/AddProductForm';

const AdminProductsServicesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products & Services</h1>
      <AddProductForm />
      <ProductList />
    </div>
  );
};

export default AdminProductsServicesPage;
