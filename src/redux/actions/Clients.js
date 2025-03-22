import {
  FETCH_CLIENTS,
  FETCH_CLIENTS_SUCCESS,
  FETCH_CLIENTS_FAILURE
} from '../constants/Clients';


export const fetchClients = () => {
  return {
    type: FETCH_CLIENTS,
  }
};

export const fetchClientsSuccess = (data) => {
  return {
    type: FETCH_CLIENTS_SUCCESS,
    payload: data
  }
};

export const fetchClientsFailure = (message) => {
  return {
    type: FETCH_CLIENTS_FAILURE,
    payload: message
  };
};