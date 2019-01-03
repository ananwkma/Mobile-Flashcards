import { SET_DECK, REMOVE_DECK } from '../actions'

function currentDeck (state = [], action) {
	switch (action.type) {
		case SET_DECK :
			return {
				...state,
				...action.deck
			}
		case REMOVE_DECK : {
			return {
				
			}
		}
		default :
			return state
	}
}

export default currentDeck