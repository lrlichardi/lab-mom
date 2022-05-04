import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const post = async (endPoint, body) => {
  const response = {};

  try {
    const { data } = await axios.post(endPoint, body);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

export const get = async (endPoint , id) => {
  const response = {};
  
  try {
    const { data } = await axios.get(endPoint , {params: id});
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

export const put = async (endPoint, body) => {
  const response = {};

  try {
    const { data } = await axios.put(endPoint, body);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

export const remove = async (endPoint, body) => {
  const response = {};

  try {
    const { data } = await axios.delete(endPoint, body);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};