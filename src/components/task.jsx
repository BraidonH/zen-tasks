import React from "react";
import { useState, useEffect } from "react";
import { removeTask, completedTask } from "../redux/slices/task";
import { useDispatch, useSelector } from "react-redux";
import anime from "animejs/lib/anime.es.js";

export default function Task(props) {
  const dispatch = useDispatch();
  const { tasks } = props;

  useEffect(() => {
    anime({});
  }, [tasks]);

  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return (
          <div className="taskWrapper" key={index}>
            <section className="buttonContainer">
              <button
                style={{
                  padding: "4px",
                  backgroundColor: "rgb(222, 149, 107)",
                }}
                onClick={() => dispatch(removeTask(task.payload))}
              >
                remove
              </button>
              <button
                style={{ padding: "4px" }}
                onClick={() => {
                  dispatch(completedTask(task.payload)),
                    dispatch(removeTask(task.payload));
                }}
              >
                completed
              </button>
            </section>
            <section>
              <h2 className="task">{task.payload}</h2>
              <section>{Date().slice(0, 25)}</section>
            </section>
          </div>
        );
      })}
    </div>
  );
}
