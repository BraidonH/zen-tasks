import React from "react";
import Task from "./task";
import { useState } from "react";

export default function Tasks(props) {
  const { tasks } = props;
  return (
    <div>
      <section>
        <Task tasks={tasks} />
      </section>
    </div>
  );
}
