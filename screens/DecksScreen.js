import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  //AsyncStorage,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Deck from '../components/Deck'
import { HeaderBackButton } from 'react-navigation';
import { lightBlue} from '../utils/colors'
import { receiveDecks } from '../actions'

export default class DecksScreen extends React.Component {
  static navigationOptions = {
    title: 'Decks',
  };

  getDecks = () => {
    this.props.dispatch(receiveDecks)
  }

  // displayData = async () => {
  //   try {
  //     let deck = await AsyncStorage.getItem('deck')
  //     let parsed = JSON.parse(deck)
  //     this.setState(() => ({deckName: parsed.deckName}))
  //   }
  //   catch(error) {
  //     alert(error)
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {this.getDecks}
          <Deck/>
          <Deck/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightBlue,
  },
  contentContainer: {
    paddingTop: 30,
  },
});
