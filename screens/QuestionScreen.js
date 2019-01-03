import React from 'react';
import {
  Image,
  Platform,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  AsyncStorage,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Deck from '../components/Deck'
import { HeaderBackButton } from 'react-navigation';
import { white, lightBlue, darkGray, darkBlue } from '../utils/colors'
import { connect } from 'react-redux'

class QuestionScreen extends React.Component {
  
  componentDidMount() {
    this.props.navigation.setParams({ title: this.props.myDeck.deckName })
  }

  static navigationOptions = ({navigate, navigation}) => ({ 
    title: typeof(navigation.state.params)==='undefined' ? 'find': navigation.state.params.title,
    headerLeft: <HeaderBackButton title="Deck" onPress={()=>{ navigation.navigate('Deck'); }} />,
  });

  answer = () => {
    this.props.navigation.navigate('Answer')
  }

  render() {
    const curDeck = this.props.myDeck
    const curScore = this.props.myScore
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>{curScore.score.cardIdx+1}/{curDeck.cards.length}</Text>
        <Text style={styles.title}>{curDeck.cards[curScore.score.cardIdx].question}</Text>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.answer}
            title="Answer"
            color="#fff"
            accessibilityLabel="Answer">
            <Text style={styles.buttonText}>Answer</Text>
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

export default connect(mapStateToProps)(QuestionScreen)