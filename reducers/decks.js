import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD } from '../actions'

function decks (state = [], action) {
	switch (action.type) {
		case RECEIVE_DECKS : {
			if (Object.keys(state).length > Object.keys(action.decks).length) {
				return {
					...action.decks
				}
			}
			return {
				...state,
				...action.decks
			}
		}
		case ADD_DECK :
			return {
				...state,
				...action.deck
			}
		case REMOVE_DECK : {
			const newState = Object.keys(state).reduce((object, key) => {
			  if (key !== action.deck) {
			    object[key] = state[key]
			  }
			  return object
			}, {})

			return {
				...newState
			}			
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