import React from 'react';
import {ModalBody, Input, InputField, VStack} from '@gluestack-ui/themed';

type GroceryFormBodyProps = {
  name: string;
  amount: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
};

const GroceryFormBody: React.FC<GroceryFormBodyProps> = ({
  name,
  amount,
  setName,
  setAmount,
}) => (
  <ModalBody>
    <VStack space="xl">
      <Input variant="outline" size="md">
        <InputField placeholder="Name" onChangeText={setName} value={name} />
      </Input>
      <Input variant="outline" size="md">
        <InputField
          placeholder="Amount"
          keyboardType="numeric"
          onChangeText={setAmount}
          value={amount}
        />
      </Input>
    </VStack>
  </ModalBody>
);

export default GroceryFormBody;
