import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTracklist } from '../services/useAlbumsService';
import { ITrackData } from '../types/albums.interface';
import { formatTrackDuration } from '../utils/formatTrackDuration';
import { IPlaylistData } from '../types/playlists.interface';
import { addTrackToPlaylist, getPlaylists } from '../services/usePlaylistsService';

const AlbumDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [tracks, setTracks] = useState<ITrackData[]>([]);
    const [playlists, setPlaylists] = useState<IPlaylistData[]>([]);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                if (id) {
                    const data = await getTracklist(id);
                    setTracks(data);
                }
            } catch (error) {
                console.error('Erro ao carregar faixas do álbum', error);
            }
        };

        const fetchPlaylists = async () => {
            try {
                const data = await getPlaylists();
                setPlaylists(data);
                if(data.length > 0) setSelectedPlaylistId(data[0].playlistId);
            } catch (error) {
                console.error('Erro ao carregar playlists', error);
            }
        };

        fetchTracks();
        fetchPlaylists();
    }, [id]);

    const handleBack = () => {
        navigate('/music/album');
    };

    const handleAddToPlaylist = async (track: ITrackData) => {
        if (!selectedPlaylistId) {
            alert('Por favor, selecione uma playlist antes de adicionar a música.');
            return;
        }
        try {
            await addTrackToPlaylist(selectedPlaylistId, track);
            alert(`Música "${track.title}" adicionada à playlist!`);
        } catch (error) {
            alert('Erro ao adicionar à playlist');
            console.error(error);
        }
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h2>Faixas do Álbum</h2>
            <button onClick={handleBack}>Voltar</button>

            <div style={{ margin: '1rem 0' }}>
                <label htmlFor="playlist-select">Escolha uma playlist:</label>
                <select
                    id="playlist-select"
                    value={selectedPlaylistId}
                    onChange={(e) => setSelectedPlaylistId(e.target.value)}
                    style={{ marginLeft: '0.5rem' }}
                >
                {playlists.map((playlist) => (
                    <option key={playlist.playlistId} value={playlist.playlistId}>
                        {playlist.name}
                    </option>
                ))}
                </select>
            </div>

            {tracks.length === 0 && <p>Nenhuma faixa encontrada.</p>}

            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
            {tracks.map((track) => (
                <li
                key={track.id}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.5rem',
                    borderBottom: '1px solid #ddd',
                }}
                >
                <span>{track.title}</span>
                <audio controls src={track.preview}></audio>
                <span>{formatTrackDuration(track.duration)}</span>
                <button onClick={() => handleAddToPlaylist(track)}>
                    Adicionar à playlist
                </button>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default AlbumDetails;