import { AsyncStorage } from 'react-native'
export const DECKS_KEY = 'ListDecks'

export function getDeckNames (results) {
  return results === null
    ? setDummyData()
    : formatDeckNames(JSON.parse(results))
}

function setDummyData () {
  return
}

function formatDeckNames (decks) {
  const deckList = Object.values(decks)
  //const numCards = Object.values(decks).cards.length
  const deckNames = deckList.map((d) => d.deckName)
  return deckNames
}