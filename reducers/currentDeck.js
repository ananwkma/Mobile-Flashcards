import { SET_DECK, REMOVE_DECK } from '../actions'

function currentDeck (state = [], action) {
	switch (action.type) {
		case SET_DECK :
			return {
				...state,
				...action.deck
			}
		default :
			return state
	}
}

export default currentDeck