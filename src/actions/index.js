import {
  SEARCH_URL,
  DEFAULT_LIST,
  AUTOR_LIST
  } from '../settings/constans';
import axios from 'axios';

export function getDefaultList () {
  const request = axios.get(`${SEARCH_URL}The+Beatles`).then(response => response.data.results);

  return {
    type: DEFAULT_LIST,
    payload: request
  }
}

export function getAutorList (autor) {
  const request = axios.get(`${SEARCH_URL}${autor}`).then(response => response.data.results);

  return {
    type: AUTOR_LIST,
    payload: request
  }
}
