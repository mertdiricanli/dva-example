import { fetchTodos } from '../services/todos';

export default {
    namespace: 'todos',
    state: [],
    effects: {
        *fetchTodos({ payload }, { put, call }) {
            const todos = yield call(fetchTodos);
            yield put({ type: "fetchTodosHandler", payload: todos.data });
        }
    },
    reducers: {
        'fetchTodosHandler'(state, { payload }) {
            return { ...state, todos: payload }
        },
        'delete'(state, { payload: id }) {
            let todos = state.todos;
            todos = todos.filter(item => item.id !== id);
            return { ...state, todos }
        }
    }
}