import React,{useState,useId, useEffect}from 'react'
import { useFeature } from '../context/themeProvider.jsx'
import { useTheme } from '../context/themeProvider.jsx'
function TodoInput() {
  const { currentTodo,addTodo,editTodo } = useFeature()
  const [title, setTitle] = useState('')
  useEffect(() => {
    if (currentTodo) {
      setTitle(currentTodo.title)
    } else {
      setTitle('')
    }
  }, [currentTodo])
  
  const { theme } = useTheme()
  const d = theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-slate-200 text-black'

  const handleAdd = () => { 
    if(currentTodo === null){
      addTodo({title,userId:1,completed:false})
    }else{
      editTodo(currentTodo.id,title)
    }
    setTitle('')
  }
  return (
    <div className='flex justify-center items-center'>
        <input type="text" placeholder='Add Todo' value={title} onChange={(e) => { setTitle(e.target.value)}} className={`rounded-md p-2 w-1/2 text-black`}/>
        <button className={`bg-blue-500 px-4 py-2 rounded-md ml-2 text-white`} onClick={handleAdd}>{currentTodo?'Update':'Add'}</button>
    </div>
  )
}

export default TodoInput