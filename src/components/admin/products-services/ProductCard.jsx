/* eslint-disable react/prop-types */
import DeleteProductButton from './DeleteProductButton';
import EditProductForm from './EditProductForm';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-gray-900 font-bold">${product.price.toFixed(2)}</p>
        <div className="mt-2 flex space-x-2">
          <EditProductForm productId={product._id} />
          <DeleteProductButton productId={product._id} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
