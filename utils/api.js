import { AsyncStorage } from 'react-native'
import { DECKS_KEY, getDeckNames } from './_deck'
import { SCORE_KEY } from './_score'

export function getDecks () {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(getDeckNames)
}

export function setCurrentDeck ({ key }) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      return AsyncStorage.getItem(data[key])
    })
}

export function submitEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeEntry (key) {
  //return AsyncStorage.clear()
  return AsyncStorage.getItem(DECKS_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data))
  })
}

export function addCard (card, deckKey) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[deckKey].cards.push(card)
      return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data))
    })
}

export function initScore ({ score }) {
  return AsyncStorage.setItem(SCORE_KEY, JSON.stringify({
    correct: 0,
    cardIdx: 0,
  }))
}

export function updateScore (correct) {
  return AsyncStorage.getItem(SCORE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data.correct += correct
      data.cardIdx += 1
      return AsyncStorage.setItem(SCORE_KEY, JSON.stringify(data))
    })
}