import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default class AddDeckScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Deck',
  };

  state = {
    text: '',
  }

  navMain = () => {

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder = "Deck Name"
          placeholderTextColor = 'rgba(0,0,0,0.4)'
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.navMain}
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
    backgroundColor: '#26afff',
  },
  title: {
    color: 'white',
    fontSize: 30,
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 30,
    paddingLeft: 10,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: '#214999',
    margin: 80,
    height: 45,
    justifyContent: 'center',
    borderRadius: 8,
  },
  submitText: {
    color: '#fff',
    textAlign:'center',
  },
});
