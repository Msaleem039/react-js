import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Kurta from './components/Kurta'
import Saree from './components/Saree'
import Lehngha from './components/Lehngha'
import Gouns from './components/Gouns'
import Dress from './components/Dress'
import MenKurta from './components/MenKurta'
import MenShirt from './components/MenShirt'
import Top from './components/Top'
import DressDetail from './components/DressDetail'
import GounsDetail from './components/GounsDetail'
import KurtaDetail from './components/KurtaDetail'
import LehnghaDetail from './components/LehnghaDetail'
import MenKurtaDetail from './components/MenKurtaDetail'
import MenShirtDetail from './components/MenShirtDetail'
import SareeDetail from './components/SareeDetail'
import TopDetail from './components/TopDetail'
import Shoes from './components/Shoes'
import ShoesDetail from './components/ShoesDetail'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Top/>}></Route>
      <Route path='/top/:slug' element={<TopDetail/>}></Route>
      <Route path='/kurta' element={<Kurta/>}></Route>
      <Route path='/kurta/:slug' element={<KurtaDetail/>}></Route>
      <Route path='/saree' element={<Saree/>}></Route>
      <Route path='/saree/:slug' element={<SareeDetail/>}></Route>
      <Route path='/lehngha' element={<Lehngha/>}></Route>
      <Route path='/lehngha/:slug' element={<LehnghaDetail/>}></Route>
      <Route path='/gouns' element={<Gouns/>}></Route>
      <Route path='/gouns/:slug' element={<GounsDetail/>}></Route>
      <Route path='/dress' element={<Dress/>}></Route>
      <Route path='/dress/:slug' element={<DressDetail/>}></Route>
      <Route path='/menkurta' element={<MenKurta/>}></Route>
      <Route path='/menkurta/:slug' element={<MenKurtaDetail/>}></Route>
      <Route path='/menshirt' element={<MenShirt/>}></Route>
      <Route path='/menshirt/:slug' element={<MenShirtDetail/>}></Route>
      <Route path='/shoes' element={<Shoes/>}></Route>
      <Route path='/shoes/:slug' element={<ShoesDetail/>}></Route>
    </Routes>
</div>
  )
}

export default App
