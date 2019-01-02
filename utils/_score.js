import { AsyncStorage } from 'react-native'
export const SCORE_KEY = 'score'

export function getScore (results) {
  return results === null
    ? initializeData()
    : formatDeckNames(JSON.parse(results))
}

function initializeData () {
  // return score : {
  //   cardIdx: 0,
  //   correct: 0,
  // }
}

function formatDeckNames (score) {
  console.log('scoreasdfa ', score)
  return score
}