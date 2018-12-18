import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import DeckScreen from '../screens/DeckScreen'
import AddCardScreen from '../screens/AddCardScreen'
import QuestionScreen from '../screens/QuestionScreen'
import ResultsScreen from '../screens/ResultsScreen'
import AnswerScreen from '../screens/AnswerScreen'

import MainTabNavigator from './MainTabNavigator';

const Deck = createStackNavigator({
  Deck: DeckScreen,
});
const Results = createStackNavigator({
  Results: ResultsScreen,
});
const Answer = createStackNavigator({
  Answer: AnswerScreen,
});
const Question = createStackNavigator({
  Question: QuestionScreen,
});
const AddCard = createStackNavigator({
  AddCard: AddCardScreen,
});


export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Deck,
  Results,
  Answer,
  Question,
  AddCard,
});