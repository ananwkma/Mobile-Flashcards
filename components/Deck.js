import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Icon } from 'expo';
import { withNavigation } from 'react-navigation';
import { white, lightGray, black, gray } from '../utils/colors'
import { connect } from 'react-redux'

class Deck extends React.Component {

  state = {
    deckName: ''
  }

  navDeckScreen = () => {
    console.log("testoutput ", this.props.navigation)
    this.props.navigation.navigate('Deck')
  }

  render() {
    const myDecks = this.props.nameArray
    return (
      myDecks.map((name,key) => (
        <TouchableOpacity style={styles.container} onPress={this.navDeckScreen} key={key}>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.cards}>30 Cards</Text>
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
  }
});

//export default withNavigation(Deck)

function mapStateToProps (state) {
  const entries = state
  let nameArray = Object.values(entries)
  let keyArray = Object.keys(entries)
  return {
    nameArray: nameArray,
    keyArray: keyArray,
  }
} 

export default withNavigation (connect(mapStateToProps)(Deck))