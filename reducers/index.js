import { RECEIVE_DECKS, ADD_DECK, SET_DECK, REMOVE_DECK } from '../actions'

function decks (state = [], action) {
	console.log("setdecktest ", action.deck)
	switch (action.type) {
		case RECEIVE_DECKS :
			return {
				...state,
				...action.decks
			}
		case ADD_DECK :
			return {
				...state,
				...action.deck
			}
		case SET_DECK :
			return {
				...action.deck
			}
		case REMOVE_DECK : 
			return {

			}
		default :
			return state
	}
}

export default decks