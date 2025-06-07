import { RouterProvider, 
            createBrowserRouter, 
            createRoutesFromElements, 
            Route } from 'react-router-dom'

import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import VansListLayout, {loader as vansListLayoutLoader} from './components/VansListLayout'
import NotFound from "./components/NotFound"
import Error from './components/Error'

import Vans, {loader as vansLoader} from './pages/Vans/Vans'
import VanDetail, {loader as vansDetailLoader} from './pages/Vans/VanDetail'

import Home from './pages/Home'
import About from './pages/About'

import Dashboard from "./pages/Host/Dashboard"
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'

import VansList, {loader as vansListLoader} from './pages/Host/VansComponents/VansList'

import Details from './pages/Host/VansComponents/VansListDetailsComponents/Details'
import Photos from './pages/Host/VansComponents/VansListDetailsComponents/Photos'
import Pricing from './pages/Host/VansComponents/VansListDetailsComponents/Pricing'

import './server'

export default function App(){

    const router = createBrowserRouter(createRoutesFromElements(
         <Route path='/' element={ <Layout /> } errorElement={<NotFound />}>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} errorElement={<Error />}  loader={vansLoader} />
            <Route path='vans/:id' element={<VanDetail />} loader={vansDetailLoader}/>

            <Route path="host" element={<HostLayout />} >
                <Route index element={<Dashboard />}/>
                <Route path='income' element={<Income />} />

                <Route path='vans' element={<VansList />} errorElement={<Error />} loader={vansListLoader} />

                <Route path='vans/:id' element={<VansListLayout />} loader={vansListLayoutLoader}> 
                    <Route index element={<Details />} />
                    <Route path='photos' element={<Photos />} />
                    <Route path='pricing' element={<Pricing />} />
                </Route>

                <Route path='reviews' element={<Reviews />} />
            </Route>

            <Route path="*" element={<NotFound />}/>
        </Route>
    ))

    return(

        <RouterProvider router={router}/>

    )
}