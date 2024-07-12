import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleComplete } from "../redux/taskSlice";
import {
  List,
  ListItem,
  IconButton,
  Checkbox,
  TextField,
  Box,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const textFieldRefs = useRef([]);

  const handleEditTask = (id, newText) => {
    dispatch(editTask({ id, text: newText }));
  };

  const handleFocus = (index) => {
    if (textFieldRefs.current[index]) {
      textFieldRefs.current[index].focus();
    }
  };

  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem
          key={task.id}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 2,
            p: 2,
            border: "1px solid #ccc",
            borderRadius: 1,
            maxWidth: {
              xs: "90%",
              lg: "50%",
            },
            width: "100%",
            margin: "20px auto",
            backgroundColor: "#E0F7FA",
          }}
        >
          <Checkbox
            checked={task.completed}
            onChange={() => dispatch(toggleComplete(task.id))}
          />
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              value={task.text}
              onChange={(e) => handleEditTask(task.id, e.target.value)}
              variant="outlined"
              size="small"
              fullWidth
              inputRef={(el) => (textFieldRefs.current[index] = el)}
              sx={{
                textDecoration: task.completed ? "line-through" : "none",
                backgroundColor: "#ffffff",
              }}
            />
          </Box>
          <IconButton onClick={() => handleFocus(index)} color="primary">
            <Edit />
          </IconButton>
          <IconButton
            onClick={() => dispatch(deleteTask(task.id))}
            color="secondary"
          >
            <Delete />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
