import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, TabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DecksScreen from '../screens/DecksScreen';
import AddDeckScreen from '../screens/AddDeckScreen';

const Decks = createStackNavigator({
  Decks: DecksScreen,
});

Decks.navigationOptions = {
  tabBarLabel: 'Decks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-folder${!focused ? '' : '-open'}`
          : `md-folder${!focused ? '' : '-open'}`
      }
    />
  ),
};

const AddDeck = createStackNavigator({
  AddDeck: AddDeckScreen,
});

AddDeck.navigationOptions = {
  tabBarLabel: 'Add Deck',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'md-add-circle'}
    />
  ),
};

export default createBottomTabNavigator({
  Decks,
  AddDeck,
});
