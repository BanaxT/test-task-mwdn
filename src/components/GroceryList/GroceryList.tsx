import React, {useState} from 'react';
import {Box, Text} from '@gluestack-ui/themed';
import {ActivityIndicator} from 'react-native';
import {useGroceryFacade} from '../../services/facade';
import GroceryForm from '../GroceryForm/GroceryForm';
import GroceryListHeader from './GroceryListHeader';
import GroceryListBody from './GroceryListBody';
import {GroceryItem} from '../../types';
import LottieView from 'lottie-react-native';

const GroceryList: React.FC = () => {
  const {
    data,
    error,
    isLoading,
    addGroceryItem,
    updateGroceryItem,
    deleteGroceryItem,
    toggleBought,
  } = useGroceryFacade();
  const [showAnimation, setShowAnimation] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [currentItem, setCurrentItem] = useState<GroceryItem | null>(null);
  const toggleShowModal = () => setShowModal(!showModal);

  const handleSubmit = () => {
    if (currentItem) {
      updateGroceryItem({...currentItem, id: currentItem.id, name, amount});
    } else {
      addGroceryItem({name, amount, bought: false});
    }
    setName('');
    setAmount('');
    setCurrentItem(null);
    toggleShowModal();
  };

  const handleEditPress = (item: GroceryItem) => {
    setCurrentItem(item);
    setName(item.name);
    setAmount(item.amount);
    toggleShowModal();
  };

  if (showAnimation) {
    return (
      <LottieView
        source={require('../../../assets/animation.json')}
        style={{width: '100%', height: '100%'}}
        onAnimationFinish={() => setShowAnimation(false)}
        autoPlay
        loop={false}
      />
    );
  }

  return (
    <Box flex={1}>
      <GroceryListHeader toggleShowModal={toggleShowModal} />
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>Error loading groceries</Text>
      ) : (
        <GroceryListBody
          data={data}
          onEditPress={handleEditPress}
          removeItem={deleteGroceryItem}
          toggleBought={toggleBought}
        />
      )}
      <GroceryForm
        showModal={showModal}
        toggleShowModal={toggleShowModal}
        name={name}
        amount={amount}
        setName={setName}
        setAmount={setAmount}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default GroceryList;
