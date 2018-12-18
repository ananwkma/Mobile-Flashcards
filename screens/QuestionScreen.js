import React from 'react';
import {
  Image,
  Platform,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Deck from '../components/Deck'
import { HeaderBackButton } from 'react-navigation';

export default class QuestionScreen extends React.Component {

 static navigationOptions = ({navigate, navigation}) => ({ 
    title: 'Spanish',
    headerLeft: <HeaderBackButton title="Deck" onPress={()=>{ navigation.navigate('Deck'); }} />,
  });

  answer = () => {
    this.props.navigation.navigate('Answer')
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
