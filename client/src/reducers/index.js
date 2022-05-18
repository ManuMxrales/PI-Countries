import { READ_DATA, LOADING, READ_DATA_DETAIL, READ_DATA_NAME, CHECK_INPUT, ERROR } from "../actions";

const initialState = {
  worldCountries: [],
  pais: [],
  searchNameCountry: false,
  loading: false,
  error: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
      case CHECK_INPUT:
        return {
          ...state,
          searchNameCountry: action.payload,
        };
        case ERROR:
            return {
              ...state,
              error: action.payload,
            };
    case READ_DATA:
      return {
        ...state,
        pais: action.payload,
        worldCountries: action.payload,
      };
    case READ_DATA_DETAIL:
      return {
        ...state,
        pais: action.payload,
      };
    case READ_DATA_NAME:
        return {
          ...state,
          worldCountries: action.payload,
        };

    default:
      return { ...state };
  }
}

export default rootReducer;
