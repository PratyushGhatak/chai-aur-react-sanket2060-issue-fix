import React, { useEffect, useState } from 'react'
import { todoContext } from '../../contexts/TodoContext';

function TodoItem({todo}) {
    const [isTodoEditable,setIsTodoEditable]=useState(true);
    const {updateTodo,deleteTodo}=todoContext();
    // const {todoMsg,setTodoMsg}=useState("");
    const [todomsg,setTodoMsg]=useState("");
   useEffect(()=>{
    // console.log(todo.todo);
    setTodoMsg(todo.todo);
   },[todo])
  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
    }`}
>
    <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.isCompleted}
        // onChange={toggleCompleted}
    />
    <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
            isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.isCompleted ? "line-through" : ""}`}
        value={todomsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={isTodoEditable}
    />
    {/* Edit, Save Button */}
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
            if (todo.isCompleted) return;

            if (isTodoEditable) {
                editTodo();
            } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
    >
        {isTodoEditable ? "📁" : "✏️"}
    </button>
    {/* Delete Todo Button */}
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
    >
        ❌
    </button>
</div>  )
}

export default TodoItem