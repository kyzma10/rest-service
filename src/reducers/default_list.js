import { DEFAULT_LIST, AUTOR_LIST, SHOW_DETAILS } from '../settings/constans';
import { addProps, showOneItem } from '../settings/const_func';

const defaultList = (state={}, action) => {
  switch(action.type) {
    case DEFAULT_LIST:
      return {...state, trackList: addProps(action.payload)}
    case AUTOR_LIST:
      return {...state, trackList: addProps(action.payload)}
    case SHOW_DETAILS:
      const newState = [...state.trackList]
      return{...state, trackList: showOneItem(newState, action.id)}
    default:
      return state;
  }
}

export default defaultList;
