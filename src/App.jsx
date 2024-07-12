// src/App.js
import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./styles.css";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex-column",
        alignItems: "center",
        gap: 2,
        mb: 3,
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          fontWeight: "bold",
          fontSize: "2.5em",
          color: "#333",
        }}
      >
        Kunal Chhatwani
      </h1>

      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          fontWeight: "500",
          fontSize: "2em",
          color: "#555",
        }}
      >
        To-Do List
      </h2>
      <TaskInput />
      <TaskList />
    </Box>
  );
};

export default App;
