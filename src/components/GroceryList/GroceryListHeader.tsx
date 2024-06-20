import React from 'react';
import {
  Box,
  Text,
  Icon,
  Pressable,
  HStack,
  AddIcon,
} from '@gluestack-ui/themed';

interface GroceryListHeaderProps {
  toggleShowModal: () => void;
}

const GroceryListHeader: React.FC<GroceryListHeaderProps> = ({
  toggleShowModal,
}) => (
  <Box
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    px="$5"
    py="$2">
    <Text size="xl" fontWeight="bold">
      Grocery List
    </Text>
    <Pressable onPress={toggleShowModal}>
      <HStack alignItems="center">
        <Icon as={AddIcon} color="$secondary600" />
        <Text ml="$2" fontSize="$sm" color="$textDark700">
          Add Item
        </Text>
      </HStack>
    </Pressable>
  </Box>
);

export default GroceryListHeader;
