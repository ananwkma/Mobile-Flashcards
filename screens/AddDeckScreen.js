import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { white, lightBlue, darkGray, darkBlue } from '../utils/colors'
import { HeaderBackButton } from 'react-navigation';
import { addDeck, setDeck } from '../actions'
import { timeToString } from '../utils/helpers'
import { submitEntry, setCurrentDeck } from '../utils/api'
import { connect } from 'react-redux'

class AddDeckScreen extends React.Component {

  static navigationOptions = ({navigate, navigation}) => ({ 
    title: 'Add Deck',
    headerLeft: <HeaderBackButton title="Back" onPress={()=>{ navigation.navigate('Decks'); }} />,
  });

  state = {
    deckName: '',
    key: '',
    cards: [],
  }

  componentDidMount () {
    const key = timeToString()
    this.setState({key: key})
  }

  submit = () => {
    const entry = this.state
    let key = this.state.key
    this.props.dispatch(addDeck({
      [key]: this.state
    }))
    submitEntry({ key, entry })

    this.props.dispatch(setDeck(entry))
    setCurrentDeck({ key })

    key = timeToString()
    this.setState({deckName: '', key: key})

    this.props.navigation.navigate('Deck')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(deckName) => this.setState({deckName})}
          value={this.state.deckName}
          placeholder = "Deck Name"
          placeholderTextColor = 'rgba(0,0,0,0.4)'
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submit}
          title="Create Deck"
          color="#fff"
          accessibilityLabel="Create Deck">
          <Text style={styles.submitText}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: lightBlue,
  },
  title: {
    color: white,
    fontSize: 30,
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textBox: {
    height: 40,
    borderColor: darkGray,
    borderWidth: 1,
    backgroundColor: white,
    margin: 30,
    paddingLeft: 10,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: darkBlue,
    margin: 80,
    height: 45,
    justifyContent: 'center',
    borderRadius: 8,
  },
  submitText: {
    color: white,
    textAlign:'center',
  },
});

function mapStateToProps (state) {
  const deckList = state.decks
  const deckListArray = Object.values(deckList)
  return {
    rawObject: deckListArray,
  }
} 

export default connect(mapStateToProps)(AddDeckScreen)
