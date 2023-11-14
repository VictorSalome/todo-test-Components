import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Paper } from "@mui/material";
import EditTaskDialog from "./EditTask";
import { useState } from "react";

export const ItensTodo = ({ task, todoDelete, todoEdit }) => {
  const [openEditTask, setOpenEditTask] = useState(false);

  const editTaskClose = () => {
    setOpenEditTask(!openEditTask);
  };

  return (
    <>
      <EditTaskDialog todoEdit={ todoEdit} open={openEditTask} editTaskClose={editTaskClose} task={task} />
      <Paper style={{ padding: "0.5em 0em" }}>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => todoDelete(task.id)}
            >
              <DeleteForeverIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText primary={task.text} onClick={() => setOpenEditTask(true)} />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
};
