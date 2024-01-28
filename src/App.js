
import { createBrowserRouter, RouterProvider,createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Home from './Components/Home';
// import Post from './Components/post';
// import Login from './client/login';
// import Store from './context/store';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Home/>}>
    <Route index element = {<Product/>} ></Route>
    <Route path='/cart' element= {<Cart/>} ></Route>
    </Route>
  ))
  return (
    <div className="App">
   <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
