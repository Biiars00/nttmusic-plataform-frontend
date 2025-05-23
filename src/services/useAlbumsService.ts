import api from '../api/axios';
import { IAlbumData, ITrackData } from '../types/albums.interface';

export const getAlbums = async (): Promise<IAlbumData[]> => {
  const response = await api.get('/music/album');
  return response.data as IAlbumData[];
}

export const getTracklist = async (id: string): Promise<ITrackData[]> => {
  const response = await api.get(`/music/album/tracklist/${id}`);
  return response.data as ITrackData[];
}