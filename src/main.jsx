
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import('tailwindcss').Config

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
)
