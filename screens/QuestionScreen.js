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

export default class QuestionScreen extends React.Component {

 static navigationOptions = ({navigate, navigation}) => ({ 
    title: 'Spanish',
    headerLeft: <HeaderBackButton title="Deck" onPress={()=>{ navigation.navigate('Deck'); }} />,
  });

  state = {
    question: 'question',
    answer: 'answer'
  }

  answer = () => {
    this.props.navigation.navigate('Answer')
  }

  displayData = async () => {
    try {
      let card = await AsyncStorage.getItem('card')
      let parsed = JSON.parse(card)
      this.setState(() => ({question: parsed.question, answer: parsed.answer}))
    }
    catch(error) {
      alert(error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>1/30</Text>
        <Text style={styles.title}>How do you say "shirt"?</Text>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.answer}
            title="Answer"
            color="#fff"
            accessibilityLabel="Answer">
            <Text style={styles.buttonText}>Answer</Text>
          </TouchableOpacity>         
          <TouchableOpacity onPress={this.displayData}>
            <Text>SHOWSHOWSHOWSHOW</Text>
          </TouchableOpacity>
        <Text style={styles.subtitle}>{this.state.question}</Text>
        <Text style={styles.subtitle}>{this.state.answer}</Text>
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
    //paddingTop: 250,
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
