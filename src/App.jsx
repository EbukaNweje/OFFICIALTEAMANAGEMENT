import React from 'react'
import LoginForm from './components/LoginForm'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Suss from './components/Suss';

const App = () => {
  return (
   <HashRouter>
      <Routes>
          <Route path='/' element={ <LoginForm/>} />
          <Route path='/successful' element={ <Suss/>} />
      </Routes>
   </HashRouter>
  )
}

export default App