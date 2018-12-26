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
import { HeaderBackButton } from 'react-navigation';
import { white, lightBlue, darkGray, darkBlue } from '../utils/colors'

export default class DecksScreen extends React.Component {
  
  static navigationOptions = ({navigate, navigation}) => ({ 
    title: 'Spanish',
    headerLeft: <HeaderBackButton title="Back" onPress={()=>{ navigation.navigate('Decks'); }} />,
  });

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
    backgroundColor: lightBlue,
    paddingTop: 100,
  },
  contentContainer: {
    paddingTop: 200,
    alignItems: 'center',
  },  
  title: {
    color: white,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    color: darkGray,
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: white,
    textAlign:'center',
  },
  button: {
    backgroundColor: darkBlue,
    margin: 10,
    height: 45,
    width: 270,
    justifyContent: 'center',
    borderRadius: 8,
  },
  deleteButtonText: {
    paddingTop: 30,
    color: white,
    textAlign:'center',
  }
});
