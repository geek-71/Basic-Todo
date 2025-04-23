import React,{ useState } from 'react'
import Navbar from './component/Navbar.jsx'
import Card from './component/Card.jsx'
import Main from './component/Main.jsx'
import TodoList from './component/TodoList.jsx'
import TodoInput from './component/TodoInput.jsx'

//usecontext
//useState
//useEffect


function App() {
  return (
    <>
    <Navbar/>
    <Main>
      <TodoInput />
      <TodoList />
      {/* <Card /> */}
    </Main>
    </>
  )
}

export default App