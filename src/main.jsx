
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { WatchlistProvider } from "./watchlist/WatchListContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <WatchlistProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </WatchlistProvider>
)
