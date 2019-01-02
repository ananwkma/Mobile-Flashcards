import { combineReducers } from 'redux'
import decks from './decks'
import currentDeck from './currentDeck'
import score from './score'

export default combineReducers({
	decks, 
	currentDeck,
	score,
})