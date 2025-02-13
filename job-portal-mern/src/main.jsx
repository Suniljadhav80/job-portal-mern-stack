import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
