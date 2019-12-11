import shortId from "shortid";
import Type from "../type";

// более продвинутая версия

const handlers = {
  [Type.TODO_ADD]: (state, { todos }) => ({
    ...state,
    todos: [...state.todos, { id: shortId(), todos: todos }]
  }),
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
  DEFAULT: state => state
};

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

//-------- старая версия

// export const todoReducer = (state, action) => {
//   console.log("state", state);
//   switch (action.type) {
//     case Type.TODO_ADD:
//       return {
//         ...state,
//         todos: [...state.todos, { id: shortId(), todos: action.todos }]
//       };
//     case Type.TODO_DELETE:
//       return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== action.id)
//       };
//     case Type.TODO_UPDATE:
//       return {
//         ...state,
//         todos: state.todos.map(elem => {
//           if (elem.id === action.id) {
//             elem.todos = action.value;
//           }
//           return elem;
//         })
//       };
//     default:
//       return state;
//   }
// };
