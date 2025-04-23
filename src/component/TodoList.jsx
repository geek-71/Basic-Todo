import React,{useEffect,useState} from 'react'
import { useTheme,useFeature } from '../context/themeProvider.jsx'
import Todo from './Todo.jsx'


function TodoList() {
    const { theme } = useTheme()
    const { todos } = useFeature()
    return (
        <div className='p-4'>
    <h1 className='text-2xl font-bold'>Todo List</h1>
    <ul className={`list-disc pl-5 list-none rounded-lg p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        {todos.length === 0 ? (
            <p className='text-gray-500'>Empty list</p>
        ) : (
            todos.map((todo) => (
                <Todo key={todo.id} todo={todo}/>
            )
        ))}
    </ul>
</div>

    )
}

export default TodoList