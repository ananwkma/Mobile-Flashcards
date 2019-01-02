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
import { incrementScore } from '../actions'
import { updateScore } from '../utils/api'

class AnswerScreen extends React.Component {

  static navigationOptions = ({navigate, navigation}) => ({ 
    title: 'Spanish',
    headerLeft: <HeaderBackButton title="Deck" onPress={()=>{ navigation.navigate('Deck'); }} />,
  });

  handleCorrect = () => {
    this.answer(1)
  }

  handleIncorrect = () => {
    this.answer(0)
  }

  answer = (value) => {
    console.log('value', value)
    const curDeck = this.props.myDeck
    const curScore = this.props.myScore
    //code to update this.props.score.correct
    this.props.dispatch(incrementScore({
      value
    }))
    updateScore(value)
    if(curDeck.cards.length === curScore.score.cardIdx+1) this.props.navigation.navigate('Results')
    else this.props.navigation.navigate('Question')
  }

  render() {
    const curDeck = this.props.myDeck
    const curScore = this.props.myScore
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>{curScore.score.cardIdx+1}/{curDeck.cards.length}</Text>
        <Text style={styles.title}>{curDeck.cards[curScore.score.cardIdx].answer}</Text>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleCorrect}
            title="Correct"
            color="#fff"
            accessibilityLabel="Correct">
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>          
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleIncorrect}
            title="Incorrect"
            color="#fff"
            accessibilityLabel="Incorrect">
            <Text style={styles.buttonText}>Incorrect</Text>
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
    paddingTop: 250,
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
  const myScore = state.score
  console.log('thescore ', myScore)
  return {
    myDeck: myDeck,
    myScore: myScore,
  }
} 

export default connect(mapStateToProps)(AnswerScreen)