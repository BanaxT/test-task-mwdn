import React from 'react';
import {Button, ButtonIcon, Box} from '@gluestack-ui/themed';
import {GroceryItem} from '../../types';
import {EditIcon, TrashIcon} from '@gluestack-ui/themed';

interface GroceryItemButtonsProps {
  item: GroceryItem;
  onEditPress: (item: GroceryItem) => void;
  removeItem: (id: string) => void;
}

const GroceryItemButtons: React.FC<GroceryItemButtonsProps> = ({
  item,
  onEditPress,
  removeItem,
}) => (
  <Box flexDirection="row" gap="$1" maxWidth="$1/3">
    <Button
      borderRadius="$full"
      onPress={() => onEditPress(item)}
      size="sm"
      p="$5"
      bg="$indigo600">
      <ButtonIcon as={EditIcon} />
    </Button>
    <Button
      borderRadius="$full"
      onPress={() => removeItem(item.id)}
      size="sm"
      p="$5"
      bg="$red500">
      <ButtonIcon as={TrashIcon} />
    </Button>
  </Box>
);

export default GroceryItemButtons;
