import {
  FETCH_CLIENTS,
  FETCH_CLIENTS_SUCCESS,
  FETCH_CLIENTS_FAILURE
} from '../constants/Clients';


const initState = {
  loading: false,
  message: '',
  data: null,
}

const Clients = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CLIENTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_CLIENTS_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload
      }
    default:
      return state;
  }
}

export default Clients