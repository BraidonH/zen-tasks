import React from "react";
import Tasks from "./tasks";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/slices/task";
import { useRef } from "react";

export default function MainContainer() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  const getUserInput = (input) => {
    let value = input.target.value;
    if ((input.key == "Enter") & (value.length > 0)) {
      dispatch(addTask(value));
      ref.current.value = "";
    }
  };

  return (
    <div className="main">
      <div className="mainEntry">
        <label>Whats On Your Plate Today?</label>
        <input
          ref={ref}
          type="text"
          className="taskInput"
          onKeyDown={getUserInput}
        ></input>
      </div>
      <p>
        "There is nothing impossible to they who will try."
        <br />
        <span>— Alexander the Great</span>
      </p>
      <section className="taskContainer">
        <Tasks tasks={tasks} />
      </section>
    </div>
  );
}
