import * as types from "./types";

const init = [];

export default (state = init, action) => {
  switch (action.type) {
    case types.addTodo:
      return [action.payload, ...state];

    case types.getTodo:
      return [...state];

    case types.deleteTodo:
      return state.filter(todo => todo.id !== action.payload);

    case types.updateTodo:
      const updated = state.map(todo => {
        let newTodo = todo;
        if (newTodo.id === action.payload.id) {
          newTodo = { ...newTodo, ...action.payload };
        }
        return newTodo;
      });
      return updated;

    case types.reorder:
      // for drag
      const { startIndex, endIndex } = action.payload;
      const [removed] = state.splice(startIndex, 1);
      state.splice(endIndex, 0, removed);
      return [...state];

    case types.move:
      // for drag in diff lists
      const { sourceId, destId, source, destination } = action.payload;
      const [removed23] = state.splice(source.index, 1);
      removed23.subject = destId;
      state.splice(destination.index, 0, removed23);
      return [...state];

    default:
      return state;
  }
};
