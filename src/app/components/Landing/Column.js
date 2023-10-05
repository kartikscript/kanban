import React, { useState } from "react";
import Task from "./Task";
import { useStore } from "../../store";
import dynamic from "next/dynamic";


function Column({ state }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );
  const addTask = useStore((store) => store.addTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);




  return (
    <div
      className=" bg-black/80  w-screen max-h-min py-3 px-2 rounded-md "
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => {
        moveTask(draggedTask, state);
        setDraggedTask(null);
      }}
    >
      <div className="flex justify-between items-center">
        <p className="text-white/80 text-[1.2rem] ">{state}</p>
        <button className="bg-white/80 p-1 text-black/90 rounded-lg" onClick={() => {setOpen(true)}}>
          add
        </button>
      </div>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}

      {open && (<>
        <div className="bg-black/40  rounded-md p-4 z-10   fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <input
            className="text-black p-2 bg-white mr-4 rounded-md "
            placeholder="Add Task"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            className="bg-white/80 p-1 text-black/80 rounded-md"
            onClick={() => {
              setOpen(false);
              addTask(text, state);
              setText('')
            }}
          >
            submit
          </button>
        </div>
          <div className="absolute top-0 left-0  w-full h-full  bg-black/20"></div>
        </>
      )}
    </div>
  );
}
export default dynamic (() => Promise.resolve(Column), {ssr: false})