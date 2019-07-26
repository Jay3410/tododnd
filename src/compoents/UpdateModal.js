import React from "react";
import { TextField, Card, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { updateTodo } from "../redux/action";

class UpdateModal extends React.Component {
  state = {
    title: this.props.title,
    desc: this.props.desc,
    error: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClickUpdate = () => {
    const error = {};
    if (this.state.title.trim().length === 0) {
      error.title = "required";
    }
    if (this.state.desc.trim().length === 0) {
      error.desc = "required";
    }
    if (Object.keys(error).length === 0) {
      this.props.updateTodo({
        title: this.state.title,
        desc: this.state.desc,
        id: this.props.id
      });
      this.props.modalClose();
    }
    this.setState({ error });
  };

  render() {
    return (
      <React.Fragment>
        <Card className="p card grow">
          <TextField
            type="text"
            variant="outlined"
            placeholder="Title of Todo"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            error={this.state.error.title ? true : false}
            className="mb"
          />
          <TextField
            type="text"
            variant="outlined"
            placeholder="Desc of Todo"
            name="desc"
            value={this.state.desc}
            onChange={this.onChange}
            error={this.state.error.desc ? true : false}
            className="mb"
          />
          <Button
            onClick={this.onClickUpdate}
            style={{ alignSelf: "flex-end" }}
            color="primary"
            variant="outlined"
          >
            update
          </Button>
          <Button
            onClick={this.props.modalClose}
            style={{ alignSelf: "flex-end" }}
            color="secondary"
            variant="outlined"
          >
            close
          </Button>
        </Card>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  {
    updateTodo
  }
)(UpdateModal);
