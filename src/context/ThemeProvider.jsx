import React,{createContext,useContext,useEffect,useState} from 'react'
import axios from 'axios'


const themeContext = createContext();
const featureContext = createContext();

export const useTheme = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export const useFeature = () => {
  const context = useContext(featureContext);
  if (!context) {
    throw new Error('useFeature must be used within a FeatureProvider');
  }
  return context;
}

export function FeatureContextProvider({children}) {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos'); // change to your actual endpoint
        setTodos(res.data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);
  
  const deleteTodo = async(id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodos((prev) => prev.filter(todo => todo.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  }
  const checkTodo = async(id) => {
    const todo = todos.find(t => t.id === id);
    try {
      setTodos(prev =>
        prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
      );
      await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { ...todo, completed: !todo.completed });
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  }
  const editTodo = async(id, newTitle) => {
    const todo = todos.find(t => t.id === id);
    try {
      setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, title: newTitle} : todo)) 
      setCurrentTodo(null);
      await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { ...todo, title: newTitle })
    } catch (error) {
      console.error("Failed to edit todo:", error);
      
    }
  }
  const addTodo = async(todo) => {
      try {
        const todoVal = await axios.post('https://jsonplaceholder.typicode.com/todos', todo);
        setTodos((prev) => [...prev, todoVal.data]);
      } catch (error) {
        console.error("Failed to add todo:", error);
      }
  }
  return (
    <featureContext.Provider value={{deleteTodo,checkTodo,editTodo,addTodo,todos,setTodos,currentTodo,setCurrentTodo}}>
        {children}
    </featureContext.Provider>
  )
}

function themeProvider({children}) {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }
  return (
    <themeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </themeContext.Provider>
  )
}

export default themeProvider