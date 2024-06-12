import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import MisTurnos from './views/MisTurnos'
import About from './components/About'
import RegisterForm from './views/Register'
import LoginForm from './views/Login'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/Home' element={ <Home/>}/>
      <Route path='/MisTurnos' element={ <MisTurnos/>}/>
      <Route path='/About' element={ <About/>}/>
      <Route path='/Register' element={<RegisterForm/>}/>
      <Route path='/Login' element={<LoginForm/>}/>
      </Routes>
    </>
  )
}

export default App
