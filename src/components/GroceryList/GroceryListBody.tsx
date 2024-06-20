import React from 'react';
import {FlatList} from '@gluestack-ui/themed';
import {GroceryItem} from '../../types';
import GroceryItemComponent from '../GroceryItem/GroceryItem';

interface GroceryListBodyProps {
  data: GroceryItem[];
  onEditPress: (item: GroceryItem) => void;
  removeItem: (id: string) => void;
  toggleBought: (item: GroceryItem) => void;
}

const GroceryListBody: React.FC<GroceryListBodyProps> = ({
  data,
  onEditPress,
  removeItem,
  toggleBought,
}) => (
  <FlatList
    data={data}
    keyExtractor={item => item.id}
    renderItem={({item}) => (
      <GroceryItemComponent
        item={item}
        onEditPress={onEditPress}
        removeItem={removeItem}
        toggleBought={toggleBought}
      />
    )}
  />
);

export default GroceryListBody;
