import { useEffect, useState } from 'react';
import FavoriteAccountCard from '../../components/client/favorites/FavoriteAccountCard';
import { fetchFavorites } from '../../services/axios';

const FavoriteAccountsPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const response = await fetchFavorites();
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorite accounts:', error);
      }
    };

    getFavorites();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Accounts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((favorite) => (
          <FavoriteAccountCard key={favorite._id} favorite={favorite} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteAccountsPage;
