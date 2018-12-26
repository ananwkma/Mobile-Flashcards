export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const SET_DECK = 'SET_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'

export function receiveDecks (decks) {
		console.log('receivedeckstest ', decks)
	return {
		type: RECEIVE_DECKS,
		decks,
	}
}

export function addDeck (deck) {
	return {
		type: ADD_DECK,
		deck,
	}
}

export function setDeck (deck) {
		console.log('actionstest ', deck)
	return {
		type: SET_DECK,
		deck,
	}
}

export function removeDeck (deck) {
	return {
		type: REMOVE_DECK,
		deck,
	}
}