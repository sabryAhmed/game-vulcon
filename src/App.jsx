import React from 'react'
import Home from './Components/Home/Home'
import GameBooks from './Components/GameBooks/GameBooks'
import Map from './Components/Map/Map'
import Footer from './Components/Footer/Footer'
import Navebar from './Components/Navebar/Navebar'
import Staking from './Components/Staking/Staking'
import Vulocn from './Components/Vulcon/Vulcon'
import Olmpyans from './Components/Olmpyans/Olmpyans'
import Gallery from './Components/Gallery/Gallery'
import Boreas from './Components/Boreas/Boreas'
import {BrowserRouter,Route,Routes,Outlet} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navebar/>
      <Routes>
        <Route path='Home' element={<Home/>} />
        <Route path='map' element={<Map/>} />
      <Route path='Boreas' element={<Boreas/>} /> 
      <Route path='vulcon' element={<Vulocn />}/>
      
     <Route path='Olmpyans' element={<Olmpyans/>} /> 
     <Route path='Staking' element={<Staking/>}/>
     <Route path='GameBooks' element={<GameBooks/>}/>
     <Route path='Gallery' element={<Gallery/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App