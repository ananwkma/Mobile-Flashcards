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
  
  componentDidMount() {
    this.props.navigation.setParams({ title: this.props.myDeck.deckName })
  }

  static navigationOptions = ({navigate, navigation}) => ({ 
    title: typeof(navigation.state.params)==='undefined' ? 'find': navigation.state.params.title,
    headerLeft: <HeaderBackButton title="Deck" onPress={()=>{ navigation.navigate('Deck'); }} />,
  });

  handleCorrect = () => {
    this.answer(1)
  }

  handleIncorrect = () => {
    this.answer(0)
  }

  answer = (value) => {
    const { myDeck, myScore } = this.props
    this.props.dispatch(incrementScore({
      value
    }))
    updateScore(value)
    if(myDeck.cards.length === myScore.score.cardIdx+1) this.props.navigation.navigate('Results')
    else this.props.navigation.navigate('Question')
  }

  render() {
    const { myDeck, myScore } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>{myScore.score.cardIdx+1}/{myDeck.cards.length}</Text>
        <Text style={styles.title}>{myDeck.cards[myScore.score.cardIdx].answer}</Text>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleCorrect}
            title="Correct"
            color={white}
            accessibilityLabel="Correct">
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>          
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleIncorrect}
            title="Incorrect"
            color={white}
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
  return {
    myDeck: myDeck,
    myScore: myScore,
  }
} 

export default connect(mapStateToProps)(AnswerScreen)