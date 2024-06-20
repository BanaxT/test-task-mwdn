import {
  fetchGroceryList,
  addGroceryItem,
  updateGroceryItem,
  deleteGroceryItem,
} from './api';
import {GroceryItem} from '../types';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {QUERY_KEYS} from '../consts/app-keys';

export const useGroceryList = () => {
  return useQuery<GroceryItem[], Error>({
    queryKey: [QUERY_KEYS.GROCERY_LIST],
    queryFn: fetchGroceryList,
  });
};

export const useAddGroceryItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addGroceryItem,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.GROCERY_LIST]});
    },
  });
};

export const useUpdateGroceryItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id, item}: {id: string; item: GroceryItem}) =>
      updateGroceryItem(id, item),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.GROCERY_LIST]});
    },
  });
};

export const useDeleteGroceryItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteGroceryItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEYS.GROCERY_LIST]});
    },
  });
};
