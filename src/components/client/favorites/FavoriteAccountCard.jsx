/* eslint-disable react/prop-types */
import { deleteFavorite } from '../../../services/axios';

const FavoriteAccountCard = ({ favorite }) => {
  const handleDelete = async () => {
    try {
      await deleteFavorite(favorite._id);
      alert('Favorite account deleted');
    } catch (error) {
      console.error('Error deleting favorite account:', error);
      alert('Failed to delete favorite account');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold">{favorite.alias}</h2>
      <p className="text-gray-700">Account No: {favorite.favorite_account_no}</p>
      <div className="mt-2 flex space-x-2">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FavoriteAccountCard;
