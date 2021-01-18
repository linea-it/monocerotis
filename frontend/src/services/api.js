import axios from 'axios';

// Set the default baseURL for the API
axios.defaults.baseURL = process.env.REACT_APP_API;

export const postRegistration = ({ name, email, institute, newsletter }) => {
  const params = { name, email, institute, newsletter_permission: newsletter };

  return axios.post('/subscription/', params)
    .then(res => res)
    .catch(err => err)
}
export const getRegistrations = () => {

  return axios.get('/subscription/')
    .then(res => res)
    .catch(err => err)
}

