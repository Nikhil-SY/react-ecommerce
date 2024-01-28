import React from 'react'
import {  Outlet } from 'react-router-dom'

import {Provider, useSelector} from 'react-redux'
import store from '../Store/store';
import NavBar from './NavBar';


export default function Home() {
   
   
  return (
  

    <div>
  <Provider store={store}>
   <NavBar/>
    

    <Outlet/>
    </Provider>
    </div>
  )
}
