import axios from 'axios';

// Set the default baseURL for the API
axios.defaults.baseURL = process.env.REACT_APP_API;

export const postSubscription = ({ name, email, institute, newsletter, country }) => {
  const params = { name, email, institute, newsletter_permission: newsletter, country };

  return axios.post('/subscription/', params)
    .then(res => res)
  }

export const getSubscriptions = () => {
  // Only considering participants that were activated:
  const params = { is_active: true, pageSize: 99999 };

  return axios.get('/subscription/', { params })
    .catch(err => err)
    .then(res => res.data)
}


export const getVerifyEmail = ({uid, token}) => {
  const params = { uid, token };

  return axios.get('/subscription/verify_email/', { params })
    .catch(err => err)
    .then(res => res.data)
}
