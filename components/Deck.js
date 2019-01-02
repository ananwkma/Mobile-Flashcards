import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Icon } from 'expo';
import { withNavigation } from 'react-navigation';
import { white, lightGray, black, gray } from '../utils/colors'
import { connect } from 'react-redux'
import { setDeck, removeDeck } from '../actions'
import { setCurrentDeck } from '../utils/api'

class Deck extends React.Component {

  navDeckScreen = (e,key) => {
    const myDeck = this.props.rawObject.find(item => item.key === key)
    this.props.dispatch(setDeck(myDeck))
    setCurrentDeck({ key })
    this.props.navigation.navigate('Deck')
  }

  render() {
    const myDecks = this.props.rawObject
    return (
      myDecks.map((deck) => (
        <TouchableOpacity style={styles.container} onPress={(e)=>this.navDeckScreen(e,deck.key)} key={deck.key}>
          <View>
            <Text style={styles.title}>{deck.deckName}</Text>
            <Text style={styles.cards}>{deck.cards.length} Cards</Text>
          </View> 
          <View style={styles.arrow}>
            <Icon.Ionicons
              name={'ios-arrow-forward'}
              size={22}
            />
          </View>
        </TouchableOpacity>
      ))    
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
  },
  delete: {
    backgroundColor: 'red',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  }
});

function mapStateToProps (state) {
  const deckList = state.decks
  const deckListArray = Object.values(deckList)
  const deckNames = deckListArray.map((d) => d.deckName)
  let keyArray = Object.keys(deckList)
  console.log('whatswrongwithmydecks ', deckList)
  return {
    rawObject: deckListArray,
    nameArray: deckNames,
    keyArray: keyArray,
  }
} 

export default withNavigation (connect(mapStateToProps)(Deck))