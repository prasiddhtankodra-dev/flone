import React from 'react'
import Home from './component/Home'
import { Route, Routes } from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
import Services from './component/Services'
import Account from './component/Account'
import Navbar from './component/Nav'
import "./index.css";
const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/account' element={<Account/>}/>
   </Routes>
   </>
  )
}

export default App




