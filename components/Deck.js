import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Icon } from 'expo';
import { withNavigation } from 'react-navigation';
import { white, lightGray, black, gray } from '../utils/colors'
import { connect } from 'react-redux'
import { setDeck, removeDeck } from '../actions'
import { removeEntry } from '../utils/api'

class Deck extends React.Component {

  navDeckScreen = (e,key) => {
    console.log("testoutput ", this.props.rawObject.find(item => console.log("itemkey ",(item))))
    const myDeck = this.props.rawObject.find(item => Object.keys(item) === key)
    console.log("mydeck ", myDeck)
    console.log("mykey ", key)
    this.props.dispatch(setDeck())
    this.props.navigation.navigate('Deck')
  }

  deleteMe = () => {
    //removeEntry('12/25/2018, 5:40:36 PM')
  }

  render() {
    const myDecks = this.props.nameArray
    return (
      myDecks.map((name,key) => (
        <TouchableOpacity style={styles.container} onPress={(e)=>this.navDeckScreen(e,key)} key={key}>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.cards}>30 Cards</Text>
          </View> 
          <TouchableOpacity style={styles.delete} onPress={this.deleteMe}>
                      <View>
                        <Text>
                          Delete Me
                        </Text>
                      </View>
                    </TouchableOpacity>
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
  const deckList = state
  const deckListArray = Object.values(deckList)
  const deckNames = deckListArray.map((d) => d.deckName)
  //let nameArray = Object.values(deckNames)
  let keyArray = Object.keys(deckList)
  console.log('abcdtest ', deckList)
  return {
    rawObject: deckListArray,
    nameArray: deckNames,
    keyArray: keyArray,
  }
} 

export default withNavigation (connect(mapStateToProps)(Deck))