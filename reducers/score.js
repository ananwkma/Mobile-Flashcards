import { INITIALIZE_SCORE, INCREMENT_SCORE } from '../actions'


function score (state = [], action) {
	switch (action.type) {
		case INITIALIZE_SCORE : {
			return {
				...state,
				...action.score
			}
		}
		case INCREMENT_SCORE : {
			console.log('state', state)
			console.log('action', action)
			return {
				...state,
				score : {
					...state.score,
					cardIdx: state.score.cardIdx + 1,
					correct: state.score.correct + action.correct.value,
				}
			}
		}	
		default :
			return state
	}
}

export default score