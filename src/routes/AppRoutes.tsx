import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Albums from '../pages/Albums';
import AlbumDetails from '../pages/AlbumDetails';
import Playlists from '../pages/Playlists';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/user/login" element={<Login />} />
      <Route path="/user/sign-up" element={<Register />} />
      <Route path="/music/album" element={<ProtectedRoute><Albums /></ProtectedRoute>} />
      <Route path="/music/album/tracklist/:id" element={<ProtectedRoute><AlbumDetails /></ProtectedRoute>} />
      <Route path="/playlist" element={<ProtectedRoute><Playlists /></ProtectedRoute>} />
    </Routes>
  );
}