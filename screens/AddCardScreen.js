import React from 'react';
import {
  Image,
  Platform,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Deck from '../components/Deck'
import { HeaderBackButton } from 'react-navigation';
import { white, lightBlue, darkGray, darkBlue } from '../utils/colors'
import { addCard } from '../utils/api'
import { createCard } from '../actions'
import { connect } from 'react-redux'
import { KeyboardAvoidingView } from 'react-native';

class AddCardScreen extends React.Component {
  
  componentDidMount() {
    this.props.navigation.setParams({ title: this.props.myDeck.deckName })
  }

  static navigationOptions = ({navigate, navigation}) => ({ 
    title: typeof(navigation.state.params)==='undefined' ? 'find': navigation.state.params.title,
    headerLeft: <HeaderBackButton title="Deck" onPress={()=>{ navigation.navigate('Deck'); }} />,
  });

  state = {
    question: '',
    answer: '',
  }

  add = (e) => {
    e.preventDefault()

    let card = {
      question: this.state.question,
      answer: this.state.answer,
    }

    const deckKey = this.props.myDeck.key
    
    this.props.dispatch(createCard(card, deckKey))

    addCard(card, deckKey)

    this.setState({question: '', answer: ''})

    this.props.navigation.navigate('Deck')
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.title}>Add Card</Text>
        <View style={styles.contentContainer} >
          <TextInput
            style={styles.textBox}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
            placeholder = "Question"
            placeholderTextColor = 'rgba(0,0,0,0.4)'
          />
          <TextInput
            style={styles.textBox}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
            placeholder = "Answer"
            placeholderTextColor = 'rgba(0,0,0,0.4)'
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.add}
            title="Answer"
            color="#fff"
            accessibilityLabel="Answer">
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    flex: 1,
    justifyContent: 'center',
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
  },
  textBox: {
    height: 40,
    borderColor: darkGray,
    borderWidth: 1,
    backgroundColor: white,
    margin: 5,
    width: 270,
    height: 45,
    paddingLeft: 10,
    borderRadius: 8,
  },
});

function mapStateToProps (state) {
  const myDeck = state.currentDeck
  return {
    myDeck: myDeck
  }
} 

export default connect(mapStateToProps)(AddCardScreen)