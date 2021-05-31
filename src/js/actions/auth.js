import * as api from '../api/auth';


export const registerUser = formData => dispatch =>
// console.log(formData)
  api.register(formData)
    .then(user => {
      debugger
      dispatch({type: 'AUTH_REGISTER_SUCCESS'})
      return user;
    })