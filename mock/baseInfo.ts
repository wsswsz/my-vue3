import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/getBaseInfo',
    method: 'get',
    response: ({}) => {
      return {
        respCode: 0,
        message: 'ok',
        data: ["okya"],
      };
    }
  },{
    url: '/api/getUserInfo',
    method: 'post',
    response: ({}) => {
      return {
        respCode: 0,
        message: 'ok',
        total: 100,
        data: [{
          name: 'xiaoming',
          age: 18,
          address: '广东省广州市天河区XXX'
        }, {
          name: 'daxia',
          age: 16,
          address: '广东省广州市黄埔区XXX'
        }],
      };
    }
  }
] as MockMethod[];