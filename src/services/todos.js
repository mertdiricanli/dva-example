import request from '../utils/request';

export function fetchTodos() {
  return request('https://jsonplaceholder.typicode.com/todos/');
}
