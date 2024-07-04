import React from 'react'
import { Routes,Route } from 'react-router-dom'
import NavBar from './NavBar'
import { LoginComp } from '../Auteticacion/LoginComp'
import { RegisterComp } from '../Auteticacion/RegisterComp'

const Rutas = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar/>}>
        <Route path='/LoginComp' element={<LoginComp/>}/>
        <Route path='/RegisterComp' element={<RegisterComp/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default Rutas
