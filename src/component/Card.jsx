import React from 'react'
import { useTheme } from '../context/themeProvider.jsx'

function card() {
  const { theme } = useTheme()
  return (
    <div className={`mx-auto p-4 w-80 rounded-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
        <p className="mt-4">This is a simple example of using Tailwind CSS with React.</p>
        <p className="mt-4">Current theme: {theme}</p>
      </div> 
  )
}

export default card