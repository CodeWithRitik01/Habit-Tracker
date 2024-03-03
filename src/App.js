
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DetailView from './components/DetailView/DetailView';
import { useEffect } from 'react';
import WeekView from './components/WeekView/WeekView';
import AddHabit from './components/AddHabit/AddHabit';

function App() {

  const router = createBrowserRouter([
    {path:'/', 
   element:<Navbar />,
    children:[
      {index:true, element: <DetailView />},
      {path:"weekView", element:<WeekView />},
      {path:"addHabit", element:<AddHabit />}
    ]}
  ])

  const date = new Date()
  useEffect(()=>{
    console.log(date.getDay());
  })
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
