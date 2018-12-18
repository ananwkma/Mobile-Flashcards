import React from 'react';
import {
  Image,
  Platform,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Deck from '../components/Deck'

export default class DecksScreen extends React.Component {
  static navigationOptions = {
    title: 'Spanish',
  };

  startQuiz = () => {
    this.props.navigation.navigate('Question')
  }

  addCard = () => {
    this.props.navigation.navigate('AddCard')
  }

  deleteDeck = () => {
    this.props.navigation.navigate('Decks')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Spanish</Text>
        <Text style={styles.subtitle}>30 Cards</Text>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.startQuiz}
            title="Start Quiz"
            color="#fff"
            accessibilityLabel="Start Quiz">
            <Text style={styles.buttonText}>Start Quiz</Text>
          </TouchableOpacity> 
          <TouchableOpacity
            style={styles.button}
            onPress={this.addCard}
            title="Add Card"
            color="#fff"
            accessibilityLabel="Add Card">
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>          
          <TouchableOpacity
            onPress={this.deleteDeck}
            title="Delete Deck"
            color="#fff"
            accessibilityLabel="Delete Deck">
            <Text style={styles.deleteButtonText}>Delete Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26afff',
    paddingTop: 100,
  },
  contentContainer: {
    paddingTop: 200,
    alignItems: 'center',
  },  
  title: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign:'center',
  },
  button: {
    backgroundColor: '#214999',
    margin: 10,
    height: 45,
    width: 270,
    justifyContent: 'center',
    borderRadius: 8,
  },
  deleteButtonText: {
    paddingTop: 30,
    color: '#fff',
    textAlign:'center',
  }
});
