import axios from 'axios';
import {GroceryItem} from '../types';
import {BACKEND_URL} from '@env';

const api = axios.create({
  baseURL: BACKEND_URL,
});

export const fetchGroceryList = async (): Promise<GroceryItem[]> => {
  const response = await api.get<GroceryItem[]>('/groceryList');
  return response.data;
};

export const addGroceryItem = async (
  item: Omit<GroceryItem, 'id'>,
): Promise<GroceryItem> => {
  const response = await api.post<GroceryItem>('/groceryList', item);
  return response.data;
};

export const updateGroceryItem = async (
  id: string,
  item: GroceryItem,
): Promise<GroceryItem> => {
  const response = await api.put<GroceryItem>(`/groceryList/${id}`, item);
  return response.data;
};

export const deleteGroceryItem = async (id: string): Promise<void> => {
  await api.delete(`/groceryList/${id}`);
};
