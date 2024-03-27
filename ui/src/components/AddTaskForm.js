import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { API_URL } from "../utils";

export const AddTaskForm = ({ fetchTasks }) => {
  const [newTask, setNewTask] = useState("");
  const [identity, setIdentity] = useState("");

  const addNewTask = async () => {
    try {
      await axios.post(API_URL, {
        name: newTask,
        completed: false,
        identity: identity
      });

      await fetchTasks();

      setNewTask("");
      setIdentity("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Typography align="center" variant="h3" paddingTop={2} paddingBottom={2}>
        Career Hunts remaining
      </Typography>
      <div className="addTaskForm">
        <TextField
          size="small"
          label="Company and Position"
          variant="outlined"
          value={identity}
          onChange={(e) => setIdentity(e.target.value)}
        />
        <TextField
          size="small"
          label="Link"
          variant="outlined"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button
          disabled={!newTask.length}
          variant="outlined"
          onClick={addNewTask}
        >
          <AddIcon />
        </Button>
      </div>
    </div>
  );
};
