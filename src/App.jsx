import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "./workSlice";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const tasks = useSelector((state) => state.work.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!input.trim()) return;
    dispatch(addTask(input));
    setInput("");
  };

  return (
    <>
      <h1>Redux Task Manager</h1>
      <div className="card">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <span>{task}</span>
            <button onClick={() => dispatch(removeTask(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
