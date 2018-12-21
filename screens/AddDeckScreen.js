import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { white, lightBlue, darkGray, darkBlue } from '../utils/colors'
import { HeaderBackButton } from 'react-navigation';
import { addDeck } from '../actions'
import { timeToString } from '../utils/helpers'
import { submitEntry } from '../utils/api'
import { connect } from 'react-redux'

class AddDeckScreen extends React.Component {

  static navigationOptions = ({navigate, navigation}) => ({ 
    title: 'Add Deck',
    headerLeft: <HeaderBackButton title="Back" onPress={()=>{ navigation.navigate('Decks'); }} />,
  });

  state = {
    deckName: '',
  }

  submit = () => {
    const key = timeToString()
    const entry = this.state

    this.props.dispatch(addDeck({
      [key]: this.state.deckName
    }))

    submitEntry({ key, entry })

    this.setState({deckName: ''})

    this.props.navigation.navigate('Decks')
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
        <Text style={styles.title}>{this.state.deckName}</Text>
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

  return {
  }
} 

export default connect(mapStateToProps)(AddDeckScreen)
