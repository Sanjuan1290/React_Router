import { useEffect, useState } from "react"

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Vans from './components/Vans'
import VanDetail from './components/VanDetail'
import Home from './pages/Home'
import About from './pages/About'
import './server'

export default function App(){
    const [vans, setVans] = useState([])

    useEffect(()=> {
        console.log(vans);
        fetch('/api/vans').
        then(response => response.json()).
        then(data => setVans(data.vans))
    }, [])

    return(

        <BrowserRouter>

            <Header />

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />} />
                <Route path='/vans' element={vans.length !== 0 && <Vans vans={vans} />} />
                <Route path='/vans/:id' element={<VanDetail vans={vans} />}/>
            </Routes>

            <Footer />

        </BrowserRouter>
    )
}