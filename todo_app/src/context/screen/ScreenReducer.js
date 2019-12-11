import Type from "../type";

const handlers = {
  [Type.CHANGE_SCREEN]: (state, payload) => payload,
  DEFAULT: state => state
};

export const screenReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};
