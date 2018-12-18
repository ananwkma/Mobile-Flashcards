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

export default class ResultsScreen extends React.Component {
  static navigationOptions = {
    title: 'Spanish',
  };

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
    backgroundColor: '#26afff',
    paddingTop: 100,
  },
  contentContainer: {
    paddingTop: 250,
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
