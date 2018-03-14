import { DEFAULT_LIST, AUTOR_LIST } from '../settings/constans';

const defaultList = (state={}, action) => {
  switch(action.type) {
    case DEFAULT_LIST:
      return {...state, trackList: action.payload}
    case AUTOR_LIST:
      return {...state, trackList: action.payload}
    default:
      return state;
  }
}

export default defaultList;
