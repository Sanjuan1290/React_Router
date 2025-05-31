
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'

import "./server"

export default function App(){

    return(

        <BrowserRouter>

            <Header />

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />} />
            </Routes>

            <Footer />

        </BrowserRouter>
    )
}