import axios from 'axios'


const normalRequest = (url) => {
  const petition =  axios.create({
    baseURL: url
  });
  console.log('petition', petition);
  return petition;
};


const authRequest = (url, token) => {
  const basicRequest = normalRequest(url);

  basicRequest.interceptors.request.use(
    ((config) => ({
      ...config,
      headers: {
        ...(token && { Authorization: `Bearer ${token}` })
      }
    }),
    async (error) => Promise.reject(error)
  ));
  return basicRequest;
};


export const useFetch = ({
  normalRequest,
  authRequest,
});