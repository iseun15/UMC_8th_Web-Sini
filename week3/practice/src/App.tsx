import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//직접 만든 페이지를 import
import HomePage from './pages/home.tsx';
import NotFound from './pages/not-found.tsx';
import MoviesPage from './pages/movies.tsx';
import RootLayout from './layout/root-layout.tsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    //없는 경로로 들어왔을 시
    errorElement : <NotFound/>,
    //Navbar 통해 path에 해당하는 element 보여주고 싶으면 children 사용
    children : [
      {
        index: true, //path : '/' , 홈 경로를 의미미
        element:<HomePage/>
      },
      {
        path:'movies/:movieId',  // /: 뒤에 설정한 이름으로 params의 값을 받아올 수 있다.
        element:<MoviesPage/>
      }
    ]
  },
])

function App(){
  return <RouterProvider router={router}/>
}

export default App
