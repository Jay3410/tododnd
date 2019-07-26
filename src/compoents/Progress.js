import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import CardComponent from "../reuse/CardComponent";

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  margin: `0 0 ${grid}px 0`,
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: "100%",
  height: "80vh"
});

const Progress = props => {
  const { todos } = props;

  return (
    <Droppable droppableId="progress">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} draggableId={todo.id} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                  )}
                >
                  <CardComponent todo={todo} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const mapStateToProps = state => {
  const todos = state.todos.filter(todo => todo.subject === "progress");

  return { todos: todos };
};

export default connect(mapStateToProps)(Progress);
