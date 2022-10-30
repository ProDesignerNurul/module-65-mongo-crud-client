import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUsers from './components/AddUsers/AddUsers';
import Home from './components/Home/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/addusers',
      element: <AddUsers></AddUsers>
    }
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
