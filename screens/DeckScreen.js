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
import { connect } from 'react-redux'
import { removeEntry, initScore } from '../utils/api'
import { initializeScore } from '../actions'

class DeckScreen extends React.Component {
  
  state = {
    curDeck: this.props.myDeck
  }

  static navigationOptions = ({navigate, navigation}) => ({ 
    title: 'Spanish',
    headerLeft: <HeaderBackButton title="Back" onPress={()=>{ navigation.navigate('Decks'); }} />,
  });

  startQuiz = () => {
    score = {
      cardIdx: 0,
      correct: 0,
    }
    this.props.dispatch(initializeScore({ score }))
    initScore({ score })
    console.log('lalala',this.state.curDeck.cards.length)
    if(this.state.curDeck.cards.length !== 0)this.props.navigation.navigate('Question')
  }

  addCard = () => {
    this.props.navigation.navigate('AddCard')
  }

  deleteDeck = () => {
    removeEntry(this.props.myDeck.key)
    this.props.navigation.navigate('Decks')
  }

  render() {
    //const curDeck = this.props.myDeck
    //console.log('decklength ', this.state.curDeck)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.curDeck.deckName}</Text>
        <Text style={styles.subtitle}>{this.state.curDeck.cards.length} Cards</Text>
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

function mapStateToProps (state) {
  const myDeck = state.currentDeck
  return {
    myDeck: myDeck
  }
} 

export default connect(mapStateToProps)(DeckScreen)