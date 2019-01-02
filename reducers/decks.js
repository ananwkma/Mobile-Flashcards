import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD } from '../actions'

function decks (state = [], action) {
	// console.log('state ', state)
	// console.log('action ', action)
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
		case REMOVE_DECK : 
			return {

			}
		case ADD_CARD : {
			let deck = action.deck
			return {
				...state, 
				[deck] : {
					...state[deck],
					cards: state[deck].cards.concat(action.card)
				}
			}
		}

		default :
			return state
	}
}

export default decks