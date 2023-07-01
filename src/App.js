import axios from 'axios'
import React from 'react'
import Footer from './Components/Layouts/Footer'
import Header from './Components/Layouts/Header'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Error from './Components/Layouts/Error'
import {
  BrowserRouter , Routes,
  Route,
  Link,
} from 'react-router-dom'
 export const App = () => {
   
  return (
    <div>
        <Header/>
        <BrowserRouter>
            <ul>
              <li>
                <Link to='/'>HOME</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
            <Routes>
               <Route exact path='/' element={<Home/>} />
               <Route path='about' element={<About/>}/>
              
               {/* <Route path='about'>
                  <About/>
               </Route>
               <Route path='contact'>
                  <Contact/>
                
               </Route> */}
               <Route path='contact' element={<Contact/>}></Route>
            </Routes>
        </BrowserRouter>
       
        <Footer/>
        
    </div>
  )
}


