import { createContext } from 'react';
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';

const QuizContext = createContext('hi')

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/', 
          loader: async ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/home',
          loader: async ()=> fetch('https://openapi.programming-hero.com/api/quiz'), 
          element: <Home></Home>,
        },
        {
          path:"/statistics",
          loader: async ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path:"/blogs",
          element: <Blogs></Blogs>
        }
      ]
    }
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <QuizContext.Provider></QuizContext.Provider>
    </div>
  );
}

export default App;
