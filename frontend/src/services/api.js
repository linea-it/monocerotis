import axios from 'axios';

// Set the default baseURL for the API
axios.defaults.baseURL = process.env.REACT_APP_API;
// axios.defaults.baseURL = "http://localhost/api";

export const postSubscription = ({ name, email, institute, newsletter, country }) => {
  const params = { name, email, institute, newsletter_permission: newsletter, country };

  return axios.post('/subscription/', params)
    .then(res => res)
  }

export const getSubscriptions = () => {
  // Only considering participants that were activated:
  const params = { is_active: true };

  return axios.get('/subscription/', { params })
    .catch(err => err)
    .then(res => res.data)
}
