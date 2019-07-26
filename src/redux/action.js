import moment from "moment";
import uuid from "uuid";
import * as types from "./types";

export const addTodo = ({ title, desc }) => ({
  type: types.addTodo,
  payload: {
    title,
    desc,
    // for unique id
    id: uuid(),
    subject: "todo",

    // date formater
    createdOn: moment().format("MMMM Do YYYY, h:mm")
  }
});
export const getTodo = id => ({
  type: types.getTodo,
  payload: id
});

export const deleteTodo = id => ({
  type: types.deleteTodo,
  payload: id
});

export const updateTodo = ({ title, desc, id }) => ({
  type: types.updateTodo,
  payload: {
    title,
    desc,
    id
  }
});

// drag
export const reorderList = ({ startIndex, endIndex }) => ({
  type: types.reorder,
  payload: { startIndex, endIndex }
});

// drag
export const moveList = ({ sourceId, destId, source, destination }) => ({
  type: types.move,
  payload: { sourceId, destId, source, destination }
});
