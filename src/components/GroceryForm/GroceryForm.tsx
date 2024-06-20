import React from 'react';
import {Modal, ModalBackdrop, ModalContent, VStack} from '@gluestack-ui/themed';
import GroceryFormHeader from './GroceryFormHeader';
import GroceryFormBody from './GroceryFormBody';
import GroceryFormFooter from './GroceryFormFooter';

type GroceryFormProps = {
  showModal: boolean;
  toggleShowModal: () => void;
  name: string;
  amount: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
};

const GroceryForm: React.FC<GroceryFormProps> = ({
  showModal,
  toggleShowModal,
  name,
  amount,
  setName,
  setAmount,
  onSubmit,
}) => {
  return (
    <Modal isOpen={showModal} onClose={toggleShowModal}>
      <ModalBackdrop />
      <ModalContent>
        <VStack space="xl">
          <GroceryFormHeader />
          <GroceryFormBody
            name={name}
            amount={amount}
            setName={setName}
            setAmount={setAmount}
          />
          <GroceryFormFooter
            toggleShowModal={toggleShowModal}
            onSubmit={onSubmit}
          />
        </VStack>
      </ModalContent>
    </Modal>
  );
};

export default GroceryForm;
