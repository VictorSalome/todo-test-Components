import React, { useState } from "react";
import { Container, List } from "@mui/material";
import { FormTodo } from "../FormTodo";
import { ItensTodo } from "../ItensTodo";
import { TitleTodo } from "../TitleTodo";


export const HomeTodo = () => {
  const [allTasks, setAllTasks] = useState([]);

  const todoAdd = (task) => {
    setAllTasks([...allTasks, task]);
  };

  const todoDelete = (id) => {
    const filtered = allTasks.filter((task) => task.id !== id);
    setAllTasks(filtered);
  };

  const todoEdit = (id, editedText) => {
    const taskArray = [...allTasks];
    taskArray.splice(id, 1, { text: editedText, id: id });
    setAllTasks(taskArray);
  };

  return (
    <>
      <Container maxWidth="xs" style={{ marginTop: "1em" }}>
        <TitleTodo/>
        <FormTodo todoAdd={todoAdd} />
        <List sx={{ marginTop: "1em" }}>
          {allTasks.map((task) => (
            <div key={task.id} style={{ marginTop: "1em" }}>
              <ItensTodo
                todoEdit={todoEdit}
                task={task}
                todoDelete={todoDelete}
                todoEdit={todoEdit}
              />
            </div>
          ))}
        </List>
      </Container>
    </>
  );
};
