/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, SafeAreaView} from '@gluestack-ui/themed';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import GroceryList from './src/components/GroceryList/GroceryList';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView flex={1}>
        <GluestackUIProvider config={config}>
          <GroceryList />
        </GluestackUIProvider>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
