import api from './config';

export const getQuestionsByTopic = ({topicId}) => {
  return api
    .get(`/question/${topicId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const getResultService = (dataquestion) => {
  return api
    .post('/getscore', {
      dataquestion: dataquestion,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
