import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Account from './Components/Account/Account';

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path="/Account" element = {<Account/>}/>
      </Routes>
    </>
  )
}

export default App
