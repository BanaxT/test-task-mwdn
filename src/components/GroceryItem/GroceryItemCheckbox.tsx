import React from 'react';
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  Box,
  Text,
} from '@gluestack-ui/themed';
import {GroceryItem} from '../../types';
import {CheckIcon} from '@gluestack-ui/themed';

interface GroceryItemCheckboxProps {
  item: GroceryItem;
  toggleBought: (item: GroceryItem) => void;
}

const GroceryItemCheckbox: React.FC<GroceryItemCheckboxProps> = ({
  item,
  toggleBought,
}) => (
  <Box flexDirection="row" alignItems="center" width="$1/2" flexWrap="wrap">
    <Box position="absolute" bottom="-$5" right="$0">
      <Text size="sm" textAlign="right">
        {item.amount}
      </Text>
    </Box>
    <Box flexDirection="row">
      <Checkbox
        size="md"
        aria-label={item.id}
        isChecked={item.bought}
        isInvalid={false}
        isDisabled={false}
        value={item.id}
        onChange={() => toggleBought(item)}>
        <CheckboxIndicator mr="$2">
          <CheckboxIcon as={CheckIcon} color="$amber200" />
        </CheckboxIndicator>
      </Checkbox>
      <Box w="$full">
        <Text
          textDecorationLine={item.bought ? 'line-through' : 'none'}
          size="lg">
          {item.name}
        </Text>
      </Box>
    </Box>
  </Box>
);

export default GroceryItemCheckbox;
