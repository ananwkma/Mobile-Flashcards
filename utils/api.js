import { AsyncStorage } from 'react-native'
import { DECKS_KEY, getDeckNames } from './_deck'


export function getDecks () {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(getDeckNames)
}

export function submitEntry ({ entry, key }) {
  console.log('entry ', entry)
  console.log('key ', key)
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeEntry (key) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data))
    })
}