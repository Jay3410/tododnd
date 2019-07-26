import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";

import Todos from "./Todos";
import Progress from "./Progress";
import Done from "./Done";
import AddInput from "./AddInput";
import { reorderList, moveList } from "../redux/action";

const App = props => {
  const DragEnd = result => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      props.reorderList({
        startIndex: source.index,
        endIndex: destination.index
      });
    } else {
      props.moveList({
        sourceId: source.droppableId,
        destId: destination.droppableId,
        source: source,
        destination: destination
      });
    }
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography align="center" className="grow" variant="h5">
            Weeks Planner
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={1} className="p">
        <DragDropContext onDragEnd={DragEnd}>
          <Grid
            item
            xs={3}
            container
            justify="flex-start"
            direction="column"
            alignItems="center"
          >
            <Typography variant="h5" className="mb">
              Add Todo
            </Typography>
            <AddInput />
          </Grid>
          <Grid item xs={3} container justify="center" alignItems="flex-start">
            <Typography variant="h5" className="mb">
              Todos
            </Typography>
            <Todos />
          </Grid>
          <Grid item xs={3} container justify="center">
            <Typography variant="h5" className="mb">
              Progress
            </Typography>
            <Progress />
          </Grid>
          <Grid item xs={3} container justify="center">
            <Typography variant="h5" className="mb">
              Done
            </Typography>
            <Done />
          </Grid>
        </DragDropContext>
      </Grid>
    </React.Fragment>
  );
};

export default connect(
  null,
  {
    reorderList,
    moveList
  }
)(App);
