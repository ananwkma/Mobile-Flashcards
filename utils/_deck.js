import { AsyncStorage } from 'react-native'
export const DECKS_KEY = 'ListDecks'

export function getDeckNames (results) {
  return results === null
    ? setDummyData()
    : formatDeckNames(JSON.parse(results))
}

function setDummyData () {
  let dummy = {
    "test" : {
      key: "test",
      cards: [
        {question: "How do you say shirt?", answer: "Camisa",},
        {question: "How do you say pants?", answer: "Pantalones"},
        {question: "How do you say socks?", answer: "Calcetines"},
      ],
      deckName: 'Spanish', 
    }
  }
  AsyncStorage.setItem(DECKS_KEY, JSON.stringify(dummy))
  return dummy
}

function formatDeckNames (decks) {
  return decks
}