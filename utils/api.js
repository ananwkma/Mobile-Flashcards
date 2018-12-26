import { AsyncStorage } from 'react-native'
import { DECKS_KEY, getDeckNames } from './_deck'


export function getDecks () {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(getDeckNames)
}

export function submitEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeEntry (key) {
      console.log("123456789876543234567875")
  return AsyncStorage.getItem(DECKS_KEY)
    .then((results) => {
      console.log("asdfghjkqwertyuioxcvbdfghjkl")
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data))
    })
}