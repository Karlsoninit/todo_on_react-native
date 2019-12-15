import Type from "../type";

const handlers = {
  [Type.TODO_ADD]: (state, { todos, id }) => {
    // console.log("init object");
    // console.log("todos -----> ", todos);
    // console.log("id -----> ", id);
    return {
      ...state,
      todos: [...state.todos, { id, todos }]
    };
  },
  [Type.TODO_DELETE]: (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  }),
  [Type.TODO_UPDATE]: (state, { id, value }) => ({
    ...state,
    todos: state.todos.map(elem => {
      if (elem.id === id) {
        elem.todos = value;
      }
      return elem;
    })
  }),
  [Type.FETCH_TODOS]: (state, { todos }) => ({
    ...state,
    todos
  }),
  [Type.SHOW_LOADER]: state => ({
    ...state,
    loading: true
  }),
  [Type.HIDE_LOADER]: state => ({
    ...state,
    loading: false
  }),
  [Type.CLEAR_ERROR]: state => ({
    ...state,
    error: null
  }),
  [Type.SHOW_ERROR]: (state, error) => ({
    ...state,
    error
  }),

  DEFAULT: state => state
};

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
