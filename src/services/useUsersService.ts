import api from '../api/axios';
import type { IUserDataLogin, IUserDataWithoutUserId, IUserDataWithoutPassword } from '../types/users.interface';

export const login = async (data: IUserDataLogin): Promise<string> =>{
  const response = await api.post('/user/login', data);
  return response.data as string;
}

export const register = async (data: IUserDataWithoutUserId) => {
  const response = await api.post('/user/sign-up', data);
  return response.data;
}

export const getUsers = async () => {
  const response = await api.get('/user');
  return response.data as IUserDataWithoutPassword[];
}