import React, { useEffect, useState } from 'react';
import {
  addPlaylist,
  getPlaylists,
  deletePlaylist,
  updateNamePlaylist,
  listTracksFromPlaylist,
  removeTrackFromPlaylist
} from '../services/usePlaylistsService';
import { IPlaylistData } from '../types/playlists.interface';
import { ITrackData } from '../types/albums.interface';
import { formatTrackDuration } from '../utils/formatTrackDuration';
import { useNavigate } from 'react-router-dom';

const Playlists = () => {
  const [playlists, setPlaylists] = useState<IPlaylistData[]>([]);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);
  const [tracks, setTracks] = useState<ITrackData[]>([]);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [editingPlaylistId, setEditingPlaylistId] = useState<string | null>(null);
  const [editingPlaylistName, setEditingPlaylistName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const data = await getPlaylists();
      setPlaylists(data);
    } catch (error) {
      alert('Erro ao carregar playlists');
      console.error(error);
    }
  };

  const handleCreatePlaylist = async () => {
    if (!newPlaylistName.trim()) {
      alert('Digite um nome para a playlist');
      return;
    }
    try {
      await addPlaylist(newPlaylistName);
      setNewPlaylistName('');
      fetchPlaylists();
    } catch (error) {
      alert('Erro ao criar playlist');
      console.error(error);
    }
  };

  const handleSelectPlaylist = async (id: string) => {
    setSelectedPlaylistId(id);
    try {
      const data = await listTracksFromPlaylist(id);
      setTracks(data);
    } catch (error) {
      alert('Erro ao carregar faixas da playlist');
      console.error(error);
    }
  };

  const handleDeletePlaylist = async (id: string) => {
    if (!window.confirm('Tem certeza que deseja deletar esta playlist?')) return;
    try {
      await deletePlaylist(id);
      if (selectedPlaylistId === id) {
        setSelectedPlaylistId(null);
        setTracks([]);
      }
      fetchPlaylists();
    } catch (error) {
      alert('Erro ao deletar playlist');
      console.error(error);
    }
  };

  const startEditing = (id: string, currentName: string) => {
    setEditingPlaylistId(id);
    setEditingPlaylistName(currentName);
  };

  const cancelEditing = () => {
    setEditingPlaylistId(null);
    setEditingPlaylistName('');
  };

  const saveEditedName = async () => {
    if (!editingPlaylistName.trim() || !editingPlaylistId) return;
    try {
      await updateNamePlaylist(editingPlaylistId, editingPlaylistName);
      setEditingPlaylistId(null);
      setEditingPlaylistName('');
      fetchPlaylists();
    } catch (error) {
      alert('Erro ao atualizar nome da playlist');
      console.error(error);
    }
  };

  const handleRemoveTrack = async (trackId: number) => {
    if (!selectedPlaylistId) return;
    if (!window.confirm('Deseja remover esta música da playlist?')) return;
    try {
      await removeTrackFromPlaylist(selectedPlaylistId, trackId);
      setTracks(prev => prev.filter(track => track.id !== trackId));
    } catch (error) {
      alert('Erro ao remover música da playlist');
      console.error(error);
    }
  };

  const handleBack = () => {
      navigate('/music/album');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Playlists</h1>
      <button onClick={handleBack}>Voltar</button>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Novo nome da playlist"
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
        />
        <button onClick={handleCreatePlaylist}>Criar</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {playlists.map(({ playlistId, name }) => (
          <li key={playlistId} style={{ marginBottom: '0.5rem' }}>
            {editingPlaylistId === playlistId ? (
              <>
                <input
                  type="text"
                  value={editingPlaylistName}
                  onChange={(e) => setEditingPlaylistName(e.target.value)}
                />
                <button onClick={saveEditedName}>Salvar</button>
                <button onClick={cancelEditing}>Cancelar</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    cursor: 'pointer',
                    fontWeight: selectedPlaylistId === playlistId ? 'bold' : 'normal',
                    marginRight: '1rem',
                  }}
                  onClick={() => handleSelectPlaylist(playlistId)}
                >
                  {name}
                </span>
                <button onClick={() => startEditing(playlistId, name)}>Renomear</button>
                <button onClick={() => handleDeletePlaylist(playlistId)}>Deletar</button>
              </>
            )}
          </li>
        ))}
      </ul>

      {selectedPlaylistId && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Músicas da playlist</h2>
          {tracks.length === 0 ? (
            <p>Nenhuma música nessa playlist.</p>
          ) : (
            <>
              <ul style={{ listStyle: 'none', padding: 0 }}>
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
                    <span>
                      {track.title} - {track.artist.name}
                    </span>
                    <audio controls src={track.preview}></audio>
                    <span>{formatTrackDuration(track.duration)}</span>
                    <button onClick={() => handleRemoveTrack(track.id)}>Remover</button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Playlists;