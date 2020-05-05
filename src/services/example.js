import request from '../utils/request';

export function query() {
  return request('/api/users');
}

//注册mock接口
export function mockData() {
  return request('api/testMock');
}
