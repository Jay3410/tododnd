import React from "react";
import {
  Card,
  Typography,
  CardActions,
  Button,
  Modal
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/action";
import UpdateModal from "../compoents/UpdateModal";

const CardComponents = props => {
  const { id, title, desc, createdOn } = props.todo;
  const { deleteTodo } = props;
  const [modal, setModal] = React.useState(false);

  const onDelete = () => deleteTodo(id);

  const onEdit = () => setModal(true);

  const modalClose = () => setModal(false);

  return (
    <React.Fragment>
      <Card className="card">
        <Typography variant="h6" color="textPrimary">
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {desc}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {createdOn}
        </Typography>
        <CardActions style={{ justifyContent: "space-between" }}>
          <Button color="secondary" onClick={onEdit} variant="outlined">
            <Edit /> edit
          </Button>
          <Button color="primary" onClick={onDelete} variant="outlined">
            <Delete /> delete
          </Button>
        </CardActions>
      </Card>
      <Modal open={modal} onClose={modalClose}>
        <UpdateModal
          title={title}
          desc={desc}
          id={id}
          modalClose={modalClose}
        />
      </Modal>
    </React.Fragment>
  );
};

export default connect(
  null,
  {
    deleteTodo
  }
)(CardComponents);
