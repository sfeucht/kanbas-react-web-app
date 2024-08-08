import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/${courseId}/quizzes`);
  return response.data;
};

export const deleteQuiz = async (quizId : any) => {
  const response = await axios.delete(`${REMOTE_SERVER}/api/quizzes/${quizId}`);
  return response.data;
};

export const createQuiz = async (newQuiz : any) => {
  const response = await axios.post(`${REMOTE_SERVER}/api/quizzes`, newQuiz);
  return response.data;
};

export const updateQuiz = async (quiz: any) => {
  const response = await axios.put(`${REMOTE_SERVER}/api/quizzes/${quiz._id}`, quiz);
  return response.data;
};

export const updateQuestion = async (question: any) => {
  console.log(`${REMOTE_SERVER}/api/questions/${question._id}`); 
  console.log('updating question', question); 
  const response = await axios.put(`${REMOTE_SERVER}/api/questions/${question._id}`, question);
  return response.data;
};

export const getQuestion = async (questionId: string) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/questions/${questionId}`);
  return response.data;
};

export const createQuestion = async (newQuestion: any) => {
  const response = await axios.post(`${REMOTE_SERVER}/api/questions`, newQuestion);
  return response.data;
};