import {SERVER_URL} from './../config';
import 'whatwg-fetch';
import qs from 'qs';

//Successfull login will store token in session
export default {
  logIn(auth) {
    sessionStorage.auth = JSON.stringify(auth);
    
  },
//Clear all the sessions on logout
  logOut() {
    delete sessionStorage.auth;
    sessionStorage.clear();
    localStorage.clear();
  },

  loggedIn() {
  //logic to check token expirys
    return sessionStorage.auth;
  }
};