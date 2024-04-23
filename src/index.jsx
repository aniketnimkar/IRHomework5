import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Players from './pages/Players'
import PlayersDetail from './pages/PlayersDetail'
import Report from "./pages/Report"
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'players',
    element: <Players/>
  },
  {
    path:'players/:playerId',
    element: <PlayersDetail/>
  },
  {
    path:'report',
    element: <Report/>
  }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)