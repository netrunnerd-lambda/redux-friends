import axios from 'axios';

export default _ => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  });
};
