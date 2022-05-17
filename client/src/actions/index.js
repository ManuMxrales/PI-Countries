// export const sumar = () => {
//     return {type:INCREMENT}
// }
// export const restar = () => {
//     return {type:DECREMENT}
// }

// export const sumar5 = () => {
//     return {type:INCREMENT_5, payload: 5}
// }
// import axios from "axios";

export const CREATE_DATA = 'CREATE_DATA';
export const READ_DATA = 'READ_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const NO_DATA = 'NO_DATA';
export const LOADING = 'LOADING';


export const createAction = (data) => ({type:CREATE_DATA, payload: data});
export const readAction = (data) => ({type:READ_DATA, payload: data});
export const updateAction = (data) => ({type:UPDATE_DATA, payload: data});
export const deleteAction = (id) => ({type:DELETE_DATA, payload: id});
export const noAction = () => ({type:NO_DATA});
export const loadingData = (estado) => ({type: LOADING, payload: estado})


export function getCountries(){
    return (dispatch) => {
        dispatch(loadingData(true));
        return fetch('http://localhost:3001/countries')
           .then((res) => res.json())
           .then((data) => {
              dispatch(loadingData(false));
            //   console.log(data);
              return dispatch(readAction(data));
           });
     };
}

