import * as types from '../types'
const initState = {
  token: ''
}

export default function initalApp(state = initState, action) {
  switch(action.type) {
    case types.INIT:
      return {
        ...state,
        token: action.payload}
    default:
      return state
  }
}