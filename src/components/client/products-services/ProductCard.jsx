/* eslint-disable react/prop-types */
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-gray-900 font-bold">${product.price.toFixed(2)}</p>
        <AddToCartButton productId={product._id} />
      </div>
    </div>
  );
};

export default ProductCard;
