import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';
import { withNavigation } from 'react-navigation';

class Deck extends React.Component {

  navDeckScreen = () => {
    this.props.navigation.navigate('Deck')
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.navDeckScreen}>
        <View>
          <Text style={styles.title}>Spanish</Text>
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
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.2)',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  title: {
    color: 'rgba(0,0,0,1.0)',
    fontWeight: 'bold',
    fontSize: 25,
  },
  cards: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
  },
  arrow: {
    justifyContent: 'center',
  }
});

export default withNavigation(Deck)