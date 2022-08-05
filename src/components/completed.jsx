import React from "react";
import { useSelector } from "react-redux";

export default function Completed() {
  const completed = useSelector((state) => state.task.completedTasks);

  return (
    <div className="completed-container">
      <h2>Completed Tasks</h2>
      {completed.map((task) => {
        return <h3 className="completed-task">{task}</h3>;
      })}
    </div>
  );
}
