import { isUndefined } from 'ramda-adjunct' // Import isUndefined from 'ramda-adjunct'

import { SQUARE_CLICKED } from '..'

const initialState = { moves: [] } // Create an initial state that holds an empty moves array

function rootReducer (state = initialState, { payload = {}, type }) {
  // default action parameter to an empty object and type
  switch (type) {
    case SQUARE_CLICKED:
      return {
        ...state, // create new state and copy over old state
        moves: isUndefined(payload.square) // if payload.square is undefined
          ? state.moves // keep same state.moves array
          : [...state.moves, payload.square] // if payload.square is defined, then append it to moves array and return that
      }
    default:
      return state
  }
}

export { initialState, rootReducer }
