import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard/dashboard.jsx';
import Login from './Components/Login/login.jsx';
import Signup from './Components/signUp/signUp.jsx';
import News from './Components/NewsCard/NewsCard.jsx';
import Sports from './Components/SportsCard/SportsCard.jsx';
import Photos from './Components/PhotosCard/PhotosCard.jsx';
import Tasks from './Components/TasksCard/TasksCard.jsx';

const router = createBrowserRouter([
  {path:"/", element: <Login/>},
  {path:"/signup", element: <Signup/>},
  {path:"/dashboard", element: <Dashboard/>},
  {path:"/news", element: <News/>},
  {path:"/sports", element: <Sports/>},
  {path:"/photos", element: <Photos/>},
  {path:"/tasks", element: <Tasks/>},
])



function App() {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>

  );
}

export default App;
