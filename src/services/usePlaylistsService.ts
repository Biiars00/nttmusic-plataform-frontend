import api from '../api/axios';
import type { ITrackData } from '../types/albums.interface'
import { IPlaylistData } from '../types/playlists.interface';

export const addPlaylist = async(name: string): Promise<string> => {
  const response = await api.post('/playlist', { name });
  return response.data as string;
}

export const getPlaylists = async (): Promise<IPlaylistData[]> => {
  const response = await api.get('/playlist');
  return response.data as IPlaylistData[];
}

export const deletePlaylist = async (id: string): Promise<string> =>  {
  const response = await api.delete(`/playlist/${id}`);
  return response.data as string;
}

export const updateNamePlaylist = async (id: string, name: string): Promise<string> => {
  const response = await api.put(`/playlist/${id}`, { name });
  return response.data as string;
}

export const listTracksFromPlaylist = async (id: string): Promise<ITrackData[]> => {
  const response = await api.get(`/playlist/${id}`);
  return response.data as ITrackData[];
}

export const addTrackToPlaylist = async (id: string, data: ITrackData): Promise<string> => {
  const response = await api.post(`/playlist/${id}`, data);
  return response.data as string;
}

export const removeTrackFromPlaylist = async (id: string, trackId: number): Promise<string> => {
  const response = await api.delete(`/playlist/${id}/${trackId}`);
  return response.data as string;
}
