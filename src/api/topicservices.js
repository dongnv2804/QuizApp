import api from './config';

export const getTopicsService = () => {
  return api
    .get('/topic')
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
