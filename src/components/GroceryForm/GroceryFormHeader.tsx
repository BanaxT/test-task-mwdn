import React from 'react';
import {
  Heading,
  ModalHeader,
  ModalCloseButton,
  Icon,
  CloseIcon,
} from '@gluestack-ui/themed';

const GroceryFormHeader: React.FC = () => (
  <ModalHeader>
    <Heading size="lg">Add Item</Heading>
    <ModalCloseButton>
      <Icon as={CloseIcon} />
    </ModalCloseButton>
  </ModalHeader>
);

export default GroceryFormHeader;
