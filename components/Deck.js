import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, AsyncStorage, Animated } from 'react-native';
import { Icon } from 'expo';
import { withNavigation } from 'react-navigation';
import { white, lightGray, black, gray } from '../utils/colors'
import { connect } from 'react-redux'
import { setDeck, removeDeck } from '../actions'
import { setCurrentDeck } from '../utils/api'

class Deck extends React.Component {
  
  state = {
    bounceValue: new Animated.Value(1),
  }

  handleClickDeck = (e,key) => {  

    const myDeck = this.props.rawObject.find(item => item.key === key)
    this.props.dispatch(setDeck(myDeck))
    setCurrentDeck({ key })
  
    Animated.sequence([
      Animated.timing(this.state.bounceValue, { duration: 70, toValue: 1.2}),
      Animated.spring(this.state.bounceValue, { toValue: 1, bounciness: 10})
    ]).start(onComplete = () => {this.props.navigation.navigate('Deck')})
  }

  render() {
    const myDecks = this.props.rawObject
    return (
      myDecks.map((deck) => (
        <TouchableOpacity style={styles.container} onPress={(e)=>this.handleClickDeck(e,deck.key)} key={deck.key}>
          <Animated.View style={[styles.direction, {transform: [{scale: this.state.bounceValue}]}]}>
            <Text style={styles.title}>{deck.deckName}</Text>
            <Text style={styles.cards}>{deck.cards.length} Cards</Text>
          </Animated.View> 
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
  console.log('whatswrongwithmydecks ', deckList)
  return {
    rawObject: deckListArray,
  }
} 

export default withNavigation (connect(mapStateToProps)(Deck))