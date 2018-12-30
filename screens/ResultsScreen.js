import React from 'react';
import {
  Image,
  Platform,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Deck from '../components/Deck'

import { HeaderBackButton } from 'react-navigation';

import { white, lightBlue, darkBlue, darkGray } from '../utils/colors'

export default class ResultsScreen extends React.Component {

  static navigationOptions = ({navigate, navigation}) => ({ 
    title: 'Spanish',
    headerLeft: <HeaderBackButton title="Deck" onPress={()=>{ navigation.navigate('Deck'); }} />,
  });

  restart = () => {
    this.props.navigation.navigate('Question')
  }  

  home = () => {
    this.props.navigation.navigate('Deck')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>You got 28/30 correct</Text>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.restart}
            title="Restart Quiz"
            color="#fff"
            accessibilityLabel="Restart Quiz">
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.home}
            title="Back to Deck"
            color="#fff"
            accessibilityLabel="Back to Deck">
            <Text style={styles.buttonText}>Back to Deck</Text>
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
