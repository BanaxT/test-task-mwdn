import React from 'react';
import {ModalFooter, Button, ButtonText} from '@gluestack-ui/themed';

type GroceryFormFooterProps = {
  toggleShowModal: () => void;
  onSubmit: () => void;
};

const GroceryFormFooter: React.FC<GroceryFormFooterProps> = ({
  toggleShowModal,
  onSubmit,
}) => (
  <ModalFooter>
    <Button
      variant="outline"
      size="sm"
      action="secondary"
      mr="$3"
      onPress={toggleShowModal}>
      <ButtonText>Cancel</ButtonText>
    </Button>
    <Button size="sm" action="positive" onPress={onSubmit}>
      <ButtonText>Submit</ButtonText>
    </Button>
  </ModalFooter>
);

export default GroceryFormFooter;
