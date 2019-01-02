export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const SET_DECK = 'SET_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'
export const INITIALIZE_SCORE = 'INITIALIZE_SCORE'
export const INCREMENT_SCORE = 'INCREMENT_SCORE'

export function receiveDecks (decks) {
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

export function createCard (card, deck) {
	console.log('card ', card)
	console.log('deck', deck)
	return {
		type: ADD_CARD,
		card,
		deck,
	}
}

export function initializeScore (score) {
	return {
		type: INITIALIZE_SCORE,
		score,
	}
}

export function incrementScore (correct) {
	return {
		type: INCREMENT_SCORE,
		correct,
	}
}