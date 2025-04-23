import React from 'react'
import { useTheme } from '../context/themeProvider.jsx'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineDoneOutline } from "react-icons/md";
import { useFeature } from '../context/themeProvider.jsx'


function Todo({todo}) {
  const { theme } = useTheme()
  const { deleteTodo, checkTodo, editTodo,setCurrentTodo } = useFeature()
  
  return (
    <li  className={`mt-2 shadow-md p-2 rounded-md cursor-pointer flex justify-between ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-slate-200 text-black'}`}>
        <p className={`${todo.completed?'line-through':''}`}>{todo.title}</p>
        <div className='actions'>
          <button className={`bg-green-500 text-white px-2 py-1 mx-2 rounded-md ${theme === 'dark' ? 'hover:bg-green-400' : 'hover:bg-green-600'}`} onClick={() => {checkTodo(todo.id)}}>
            <MdOutlineDoneOutline/>
          </button>
          <button className={`bg-blue-500 text-white px-2 py-1 mx-2 rounded-md ${theme === 'dark' ? 'hover:bg-blue-400' : 'hover:bg-blue-600'}`} onClick={() => { setCurrentTodo(todo) }}>
            <MdModeEdit/>
          </button>
          <button className={`bg-red-500 text-white px-2 py-1 mx-2 rounded-md ${theme === 'dark' ? 'hover:bg-red-400' : 'hover:bg-red-600'}`} onClick={() => {deleteTodo(todo.id)}}>
            <MdDelete/>
          </button>
        </div>
    </li>
  )
}

export default Todo