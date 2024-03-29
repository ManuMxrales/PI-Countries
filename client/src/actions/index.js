export const CREATE_DATA = 'CREATE_DATA';
export const READ_DATA = 'READ_DATA';
export const READ_DATA_DETAIL = 'READ_DATA_DETAIL';
export const READ_DATA_NAME = 'READ_DATA_NAME';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const NO_DATA = 'NO_DATA';
export const LOADING = 'LOADING';
export const CHECK_INPUT = 'CHECK_INPUT';
export const ERROR = 'ERROR';
export const READ_ACTIVITY = 'READ_ACTIVITY';
export const ORDER_NAME = 'ORDER_NAME';
export const ORDER_POPULATION = 'ORDER_POPULATION';
export const ORDER_CONTINENT = 'ORDER_CONTINENT';
export const ORDER_BY_ACTIVITY = 'ORDER_BY_ACTIVITY';
export const ORDER_PAGE = 'ORDER_PAGE';

export const createAction = (data) => ({type:CREATE_DATA, payload: data});
export const readAction = (data) => ({type:READ_DATA, payload: data});
export const readActionDetail = (data) => ({type:READ_DATA_DETAIL, payload: data});
export const readActionName = (data) => ({type:READ_DATA_NAME, payload: data});
export const updateAction = (data) => ({type:UPDATE_DATA, payload: data});
export const deleteAction = (id) => ({type:DELETE_DATA, payload: id});
export const noAction = () => ({type:NO_DATA});
export const errr = (estado) => ({type:ERROR, payload: estado});
export const loadingData = (estado) => ({type: LOADING, payload: estado})
export const checkInput = (estado) => ({type: CHECK_INPUT, payload: estado})
export const readActivity = (data) => ({type: READ_ACTIVITY, payload: data})
export const orderByName = (data) => ({type: ORDER_NAME, payload: data})
export const orderByPopulation = (data) => ({type: ORDER_POPULATION, payload: data})
export const orderByContinent = (data) => ({type: ORDER_CONTINENT, payload: data})
export const orderByActivity = (data) => ({type: ORDER_BY_ACTIVITY, payload:data})
export const orderPage = (data) => ({type: ORDER_PAGE, payload: data})

export function getCountries(){
    return (dispatch) => {
        dispatch(loadingData(true));
        return fetch('http://localhost:3001/countries')
           .then((res) => res.json())
           .then((data) => {
              dispatch(loadingData(false));
              return dispatch(readAction(data));
           });
     };
}
export function getCountriesId(id){
  return (dispatch) => {
      dispatch(loadingData(true));
      return fetch(`http://localhost:3001/countries/:${id}`)
      .then((res) => res.json())
      .then((data) => {
         dispatch(loadingData(false));
         return dispatch(readActionDetail(data));
      });
   };
}
export function getCountriesName(name){
  return (dispatch) => {
      dispatch(loadingData(true));
      return fetch(`http://localhost:3001/countries?name=${name}`)
      .then((res) => res.json())
      .catch((err)=> console.error(err + "atrape error en action"))
      .then((data) => {
         dispatch(loadingData(false));
         dispatch(checkInput(true));
         return dispatch(readActionName(data));
      })
      .catch((err)=> console.error(err + "atrape error en action"));
      
   };
}
export function getActivities(){
   return (dispatch) => {
       dispatch(loadingData(true));
       return fetch(`http://localhost:3001/activity`)
       .then((res) => res.json())
       .then((data) => {
          dispatch(loadingData(false));
          return dispatch(readActivity(data));
       });
    };
 }
export function postActivities(data) {
   return (dispatch) => {
      fetch('http://localhost:3001/activity', {
         method: "POST",
         body: JSON.stringify(data),
         headers: {
            "Content-Type": "application/json",
         }
      })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((data) => {
         console.log("Success:", data);
         return data;
      });
   }
}