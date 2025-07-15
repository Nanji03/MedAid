import axios from 'axios';

export const register = async (name, email, password) => {
  const res = await axios.post('http://localhost:5000/api/users/register', {
    name,
    email,
    password
  });
  return res.data;
};

export const login = async (email, password) => {
  const res = await axios.post('http://localhost:5000/api/users/login', {
    email,
    password
  });
  return res.data;
};
