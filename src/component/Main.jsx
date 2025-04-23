import React from 'react'
import { useTheme } from '../context/themeProvider.jsx'

function Main({children}) {
  const { theme } = useTheme()
  
  return (
    <div className={`pt-16 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-slate-400 text-black'} `}>
        {children}
    </div>
  )
}

export default Main