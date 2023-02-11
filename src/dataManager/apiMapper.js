const API = process.env.REACT_APP_API;

export const EndPoint = {
  GET_V1_TEST_AUTO_LOGIN: `${API}/url`,
};

const ApiMapper = {
  get: {
    [EndPoint.GET_V1_TEST_AUTO_LOGIN]: {},
  },
  post: {},
  patch: {},
  put: {},
  delete: {},
};

export default ApiMapper;
