import {
  useGroceryList,
  useAddGroceryItem,
  useUpdateGroceryItem,
  useDeleteGroceryItem,
} from './queries';
import {GroceryItem} from '../types';

export const useGroceryFacade = () => {
  const {data, error, isLoading} = useGroceryList();
  const addGroceryItemMutation = useAddGroceryItem();
  const updateGroceryItemMutation = useUpdateGroceryItem();
  const deleteGroceryItemMutation = useDeleteGroceryItem();

  const addGroceryItem = (item: Omit<GroceryItem, 'id'>) => {
    addGroceryItemMutation.mutate(item);
  };

  const updateGroceryItem = (item: GroceryItem) => {
    if (!item.id) throw new Error('Item ID is required');
    updateGroceryItemMutation.mutate({id: item.id, item});
  };

  const deleteGroceryItem = (id: string) => {
    deleteGroceryItemMutation.mutate(id);
  };

  const toggleBought = (item: GroceryItem) => {
    updateGroceryItem({...item, id: item.id, bought: !item.bought});
  };

  return {
    data,
    error,
    isLoading,
    addGroceryItem,
    updateGroceryItem,
    deleteGroceryItem,
    toggleBought,
  };
};
