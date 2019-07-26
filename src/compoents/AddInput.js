import React from "react";
import { TextField, Card, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { addTodo } from "../redux/action";
import { Add } from "@material-ui/icons";

class AddInput extends React.Component {
  state = {
    title: "",
    desc: "",
    error: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = () => {
    const error = {};
    if (this.state.title.trim().length === 0) {
      error.title = "required";
    }
    if (this.state.desc.trim().length === 0) {
      error.desc = "required";
    }
    if (Object.keys(error).length === 0) {
      this.props.addTodo({
        title: this.state.title,
        desc: this.state.desc
      });
      this.setState({ title: "", desc: "" });
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
            onClick={this.onClick}
            style={{ alignSelf: "flex-end" }}
            color="primary"
            variant="outlined"
          >
            <Add /> Add
          </Button>
        </Card>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddInput);
