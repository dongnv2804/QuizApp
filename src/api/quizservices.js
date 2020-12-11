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
  console.log(dataquestion);
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

// 		api.GET("/question/:topicid", controllers.GetQuestionByTopicID)
// 		api.POST("/question/create", controllers.AddQuestion)
// 		api.POST("/getscore", controllers.CaculatorScore)
