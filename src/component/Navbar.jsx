import React from 'react'
import { useTheme } from '../context/themeProvider.jsx'

function navbar() {
  const { toggleTheme } = useTheme()
  return (
    <div className="nav bg-blue-500 p-4 flex justify-between items-center">
      <p className='text-blue'>welcome to tailwind</p>
      <button className='bg-white p-2 rounded-md' onClick={toggleTheme}> switch theme</button>
    </div>
  )
}

export default navbar