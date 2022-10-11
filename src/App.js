import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Quizzes from './components/Quizzes/Quizzes';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
          path: '/quizzes/:quizzesId',
          loader: async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizzesId}`)
          },
          element: <Quizzes></Quizzes>
        },
        
        // {
        //   path: '*', element: <div className='mt-5  text-white w-100 text-center'><h1 className='bg-danger d-inline px-2'>This route not found</h1></div>
        // }
      ]
    }
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
