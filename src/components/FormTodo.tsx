import { TextField, Button, Paper } from "@mui/material";
import { useState } from "react";

export const FormTodo = ({ todoAdd }) => {
  const [textRead, setTextRead] = useState("null");
  const [id, setId] = useState(0);

  const createTask = (textRead) => {
    const todoObject = {
      text: textRead,
      id: id,
    };
    setId(id + 1);

    todoAdd(todoObject);
    document.getElementById("standard-basic").value = null
  };

  return (
    <>
      <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            id="standard-basic"
            label="Insira sua tarefa"
            variant="standard"
            onChange={(e) => setTextRead(e.target.value)}
            fullWidth
            
          />
          <Button variant="text" onClick={() => createTask(textRead)}>
            Adicionar Tarefa
          </Button>
        </div>
      </Paper>
    </>
  );
};
