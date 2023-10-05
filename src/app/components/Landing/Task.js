import React from "react";
import { useStore } from '../../store';


export default function Task({title}){

  const tasks= useStore(store=>store.tasks.find(task=>task.title===title))
  const deleteTask=useStore(store=>store.removeTask)
  const setDraggedTask=useStore(store=>store.setDraggedTask)
  return(
    <div draggable onDragStart={()=>setDraggedTask(title)} className="bg-white rounded-md h-20 mt-4 p-1 text-black cursor-move text-[12px] flex flex-col justify-between">
      <p className="text-base">{tasks.title}</p>
         
      <div className="flex justify-between">
       
            <button className="bg-black/80 p-1 text-white/80 capitalize rounded-md " onClick={()=>deleteTask(title)}>delete</button>
         
          <div className={`bg-gray-400 p-1 p-1 ${tasks.state}`}>{tasks.state}</div>
      </div>
      </div>
  )
}