import {ADD_FAV, REMOVE_FAV} from './actionType'


export function addFav(char){
    return{
        type: ADD_FAV,
        payload: char
    }
}
export function removeFav(id){
    return{
        type: REMOVE_FAV,
        payload: id
    }
}
/*
addFav: esta función recibe un personaje por parámetro. 
Deberás retornar una action con el type igual a "ADD_FAV", 
y el payload igual a ese personaje.
removeFav: esta función recibe un id por parámetro. 
Deberás retornar una action con el type igual a "REMOVE_FAV", 
y el payload igual a ese id.
*/