import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Icon } from 'expo';
import { withNavigation } from 'react-navigation';
import { white, lightGray, black, gray } from '../utils/colors'

class Deck extends React.Component {

  state = {
    deckName: ''
  }

  componentDidMount () {
    this.displayData()
  }

  navDeckScreen = () => {
    this.props.navigation.navigate('Deck')
  }

  displayData = async () => {
    try {
      let deck = await AsyncStorage.getItem('deck')
      let parsed = JSON.parse(deck)
      // AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
      //   [key]: entry
      // }))
      this.setState(() => ({deckName: parsed.deckName}))
    }
    catch(error) {
      alert(error)
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.navDeckScreen}>
        <View>
          <Text style={styles.title}>{this.state.deckName}</Text>
          <Text style={styles.cards}>30 Cards</Text>
        </View> 
        <View style={styles.arrow}>
          <Icon.Ionicons
            name={'ios-arrow-forward'}
            size={22}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    backgroundColor: white,
    borderColor: lightGray,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  title: {
    color: black,
    fontWeight: 'bold',
    fontSize: 25,
  },
  cards: {
    color: gray,
    fontSize: 15,
  },
  arrow: {
    justifyContent: 'center',
  }
});

export default withNavigation(Deck)