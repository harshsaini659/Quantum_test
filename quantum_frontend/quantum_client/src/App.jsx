import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Table from './pages/Table'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Table /> } />
        <Route path="signin" element={ <Signin /> } />
        <Route path="signup" element={ <Signup /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App