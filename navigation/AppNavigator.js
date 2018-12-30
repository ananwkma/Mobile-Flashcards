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

const Question = createStackNavigator({
  Question: QuestionScreen,
});

const Answer = createStackNavigator({
  Answer: AnswerScreen,
});

const Results = createStackNavigator({
  Results: ResultsScreen,
});

const AddCard = createStackNavigator({
  AddCard: AddCardScreen,
});


export default createSwitchNavigator({
  Main: MainTabNavigator,
  Deck,
  Question,
  Answer,
  Results,
  AddCard,
});