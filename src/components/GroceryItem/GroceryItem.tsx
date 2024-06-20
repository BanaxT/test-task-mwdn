import React from 'react';
import {Box, HStack} from '@gluestack-ui/themed';
import {GroceryItem} from '../../types';
import GroceryItemCheckbox from './GroceryItemCheckbox';
import GroceryItemButtons from './GroceryItemButtons';

interface GroceryItemProps {
  item: GroceryItem;
  onEditPress: (item: GroceryItem) => void;
  removeItem: (id: string) => void;
  toggleBought: (item: GroceryItem) => void;
}

const GroceryItemComponent: React.FC<GroceryItemProps> = ({
  item,
  onEditPress,
  removeItem,
  toggleBought,
}) => {
  return (
    <Box
      bg="$white"
      borderRadius="$xl"
      softShadow="1"
      mb="$2"
      mx="$5"
      py="$7"
      px="$5">
      <HStack space="md" justifyContent="space-between" alignItems="center">
        <GroceryItemCheckbox item={item} toggleBought={toggleBought} />
        <GroceryItemButtons
          item={item}
          onEditPress={onEditPress}
          removeItem={removeItem}
        />
      </HStack>
    </Box>
  );
};

export default GroceryItemComponent;
