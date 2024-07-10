import { useEffect, useState } from "react";
import Navbar from "../../components/admin/home/Navbar";
import Sidebar from "../../components/admin/home/Sidebar";
import AddProductForm from "../../components/admin/products-services/AddProductForm";
import ProductsList from "../../components/admin/products-services/ProductList";
import { fetchProducts } from "../../services/axios";

const AdminProductsServicesPage = () => {
  const [products, setProducts] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleCloseModal = () => {
    setIsAdding(false);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="flex min-h-screen text-white bg-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 p-6">
          <h1 className="mb-6 text-2xl font-bold">
            Products & Services Management
          </h1>
          <button
            onClick={handleAddClick}
            className="p-2 mb-4 bg-blue-500 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
          <ProductsList products={products} />
          {isAdding && (
            <AddProductForm
              onClose={handleCloseModal}
              onAdd={handleAddProduct}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProductsServicesPage;
