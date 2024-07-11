import Navbar from "../../components/client/home/Navbar";
import Sidebar from "../../components/client/home/Sidebar";
import ProductList from "../../components/client/products-services/ProductList";

const ProductsServicesPage = () => {
  return (
    <div className="flex min-h-screen text-white bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="mb-4 text-2xl font-bold">Products & Services</h1>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductsServicesPage;
