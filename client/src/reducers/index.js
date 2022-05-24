import {
  READ_DATA,
  LOADING,
  READ_DATA_DETAIL,
  READ_DATA_NAME,
  CHECK_INPUT,
  ERROR,
  READ_ACTIVITY,
  ORDER_NAME,
  ORDER_POPULATION,
  ORDER_CONTINENT,
  ORDER_BY_ACTIVITY,
} from "../actions";

const initialState = {
  worldCountries: [],
  pais: [],
  fCountry: [],
  activities: [],
  searchNameCountry: false,
  loading: false,
  error: false,
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
        fCountry: action.payload,
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
    case READ_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };
    case ORDER_NAME:
      let orderByName =
        action.payload === "az"
          ? [...state.worldCountries].sort((a, b) =>
              a.name.localeCompare(b.name)
            )
          : action.payload === "za"
          ? [...state.worldCountries].sort((a, b) =>
              b.name.localeCompare(a.name)
            )
          : state.worldCountries;
      return {
        ...state,
        worldCountries: orderByName,
      };
    case ORDER_POPULATION:
      let orderByPopulation =
        action.payload === "menorPoblacion"
          ? [...state.worldCountries].sort(
              (a, b) => a.population - b.population
            )
          : action.payload === "mayorPoblacion"
          ? [...state.worldCountries].sort(
              (a, b) => b.population - a.population
            )
          : state.worldCountries;
      return {
        ...state,
        worldCountries: orderByPopulation,
      };
    case ORDER_CONTINENT:
      const allCountries = state.fCountry;
      const orderByContinent =
        action.payload === "All"
          ? allCountries
          : [...allCountries].filter((c) => c.continents === action.payload);
      return {
        ...state,
        worldCountries: orderByContinent,
      };
    case ORDER_BY_ACTIVITY:
      const allCountries2 = state.fCountry;
      const orderByActivity = allCountries2.filter(e => e.activities && e.activities.map((e) => e.name).includes(action.payload))
      return {
        ...state,
        worldCountries: orderByActivity,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
