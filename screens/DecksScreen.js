import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import Deck from '../components/Deck'
import { HeaderBackButton } from 'react-navigation';
import { lightBlue} from '../utils/colors'
import { receiveDecks } from '../actions'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'

class DecksScreen extends React.Component {

  static navigationOptions = {
    title: 'Decks',
  };

  componentDidMount () {
    getDecks()
    .then((entries) => {
      this.props.dispatch(receiveDecks(entries))
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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

function mapStateToProps (state) {

  return {
  }
} 

export default connect(mapStateToProps)(DecksScreen)