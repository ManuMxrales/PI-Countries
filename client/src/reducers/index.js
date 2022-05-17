import { READ_DATA, LOADING } from "../actions";


const initialState = {
    worldCountries: [],
    countries: [],
    loading:false,
};

  function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case READ_DATA:
            return{
                ...state,
                countries: action.payload,
                worldCountries: action.payload
            }
        
        default:
            return {...state};
    }
    
  }
  
  export default rootReducer;