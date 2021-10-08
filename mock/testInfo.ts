import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/getTest',
    method: 'post',
    response: ({}) => {
      return {
        respCode: 0,
        message: 'ok',
        data: ["test"],
      };
    },
  },
] as MockMethod[];