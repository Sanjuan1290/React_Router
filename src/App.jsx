import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import VansListLayout from './components/VansListLayout'

import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'

import Home from './pages/Home'
import About from './pages/About'

import Dashboard from "./pages/Host/Dashboard"
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'

import VansList from './pages/Host/VansComponents/VansList'

import Details from './pages/Host/VansComponents/VansListDetailsComponents/Details'
import Photos from './pages/Host/VansComponents/VansListDetailsComponents/Photos'
import Pricing from './pages/Host/VansComponents/VansListDetailsComponents/Pricing'

import './server'

export default function App(){
    const [vans, setVans] = useState([])

    useEffect(()=> {
        fetch('/api/vans').
        then(response => response.json()).
        then(data => setVans(data.vans))
    }, [])

    return(

        <BrowserRouter>

            <Routes>

                <Route path='/' element={ <Layout /> }>

                    <Route index element={<Home />}/>
                    <Route path='about' element={<About />} />
                    <Route path='vans' element={vans.length !== 0 && <Vans vans={vans} />} />
                    <Route path='vans/:id' element={<VanDetail vans={vans} />}/>

                    <Route path="host" element={<HostLayout />} >
                        <Route index element={<Dashboard />}/>
                        <Route path='income' element={<Income />} />

                        <Route path='vans' element={<VansList vans={vans}/>} />
                        <Route path='vans/:id' element={<VansListLayout />}> 
                            <Route index element={<Details />} />
                            <Route path='photos' element={<Photos />} />
                            <Route path='pricing' element={<Pricing />} />
                        </Route>

                        <Route path='reviews' element={<Reviews />} />
                    </Route>

                </Route>

            </Routes>


        </BrowserRouter>
    )
}