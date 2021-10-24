import axios from 'axios';

export const DETAILS_NOTE = 'DETAILS_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
export const NOTES = 'NOTES';
export const ERROR = 'ERROR';
export const USER = 'USER';

const URL = 'https://jsonplaceholder.typicode.com'
const URL_LOGIN = 'http://challenge-react.alkemy.org'
//user

export function login (email,password) {
    return async function(dispatch){
        try {
        let loginUser= await axios.post(URL_LOGIN, {
            email,password
        });

    localStorage.setItem('token',loginUser.data.token)

            return dispatch({
                type: USER,
                payload:loginUser.data.token
            });
    
        } catch (error) {

            let errors=Number(`${error}`.split('code')[1]) === 401 ? 
            'Usuario o contraseña invalidos' : 
            'Ah ocurrido un error, intente mas tarde'

            return dispatch({
                type: ERROR,
                payload:errors
            });
        };
    };
};

export function logoutState () {

    localStorage.removeItem('token');

    return {
        type: USER,
        payload:undefined
    };
};


//Notes

export function initialNotes () {
    return async function(dispatch){
        try {
            let {data}= await axios.get(`${URL}/posts`);
            
            return dispatch({
                type: NOTES,
                payload: data
            });

        } catch (error) {
            return dispatch({
                type: ERROR,
                payload:'Ops! ha ocurrido un error'
            });
        };
    };
};
export function  addNote (newNote) {
    return async function(dispatch){
        try {
        let {data}= await axios.post(`${URL}/posts`, {
        ...newNote
        });

        return dispatch({
            type: ADD_NOTE,
            payload: data
        });

        } catch (error) {
    
            return dispatch({
                type: ERROR,
                payload:'No se puedo agregar la nota'
            });
        };
    };
};

export function removeNote (id) {
    return async function(dispatch){
        try {
            await axios.delete(`${URL}/posts/${id}`);

            return dispatch({
                type: REMOVE_NOTE,
                payload:id
            });
            
        } catch (error) {

            return dispatch({
                type: ERROR, 
                payload:'No se puedo eliminar la nota'
            }); 
        };
    };
};

export function editNote (id,newNote) {
   
    return async function(dispatch){
        try {
            let {data}= await axios.put(`${URL}/posts/${id}`, {
            ...newNote
            });
            return dispatch({
                type: EDIT_NOTE,
                payload: data
            });

        } catch (error) {
            return dispatch({
                type: ERROR,
                payload:'No se puedo editar la nota'
            }); 
        };
    };
};

export function detailsNote (id) {
    return async function(dispatch){
        try {

            return dispatch({
                type: DETAILS_NOTE,
                payload: id
            });
            
        } catch (error) {

            return dispatch({
                type: ERROR,
                payload:'No se encontro la nota'
            }); 
        };
    };
};