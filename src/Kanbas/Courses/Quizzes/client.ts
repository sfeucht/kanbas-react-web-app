import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/${courseId}/quizzes`);
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

export const getQuestion = async (questionId: string) => {
  const response = await axios.get(`${REMOTE_SERVER}/api/questions/${questionId}`);
  return response.data;
};