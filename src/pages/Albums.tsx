import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAlbums } from '../services/useAlbumsService';
import { IAlbumData } from '../types/albums.interface';

const Albums = () => {
  const [albums, setAlbums] = useState<IAlbumData[]>([]);
  const navigate = useNavigate();

    const accessPlaylists = () => {
        navigate('/playlist');
    };

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const data = await getAlbums();
        setAlbums(data as IAlbumData[]);
      } catch (error) {
        console.error('Erro ao buscar álbuns', error);
      }
    };

    fetchAlbums();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/user/login');
  };

  return (
    <div style={{ padding: '1rem' }}>
        <div>
            <h1>Álbuns</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
        <button onClick={accessPlaylists}>
            Playlists
        </button>

        <div
            style={{
            marginTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            }}
        >
            {albums.map((album) => (
            <div
                key={album.id}
                style={{
                width: '200px',
                padding: '1rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                cursor: 'pointer',
                }}
                onClick={() => navigate(`/music/album/tracklist/${album.id}`)}
            >
                {album.image && (
                <img
                    src={album.image}
                    alt={album.title}
                    style={{ width: '100%', borderRadius: '4px' }}
                />
                )}
                <h3>{album.title}</h3>
                <p>{album.artist.name}</p>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Albums;