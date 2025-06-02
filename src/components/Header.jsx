import { Link, useLocation } from 'react-router-dom'


export default function Header(props){

    const urlLocation = useLocation()
    return(
        <>
            <header>
                <Link to="/"><h1>#VANLIFE</h1></Link>

                <nav>
                    <ul>
                        <li>{<Link to="/host" className={urlLocation.pathname.startsWith('/host') ? 'activeNav' : null}>Host</Link>}</li>
                        <li>{<Link to="/about" className={urlLocation.pathname.startsWith('/about') ? 'activeNav' : null}>About</Link>}</li>
                        <li>{<Link to="/vans" className={urlLocation.pathname.startsWith('/vans') ? 'activeNav' : null}>Vans</Link>}</li>
                    </ul>
                </nav>

            </header>

        </>
    )
}