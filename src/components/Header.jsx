import { Link } from 'react-router-dom'

export default function Header(props){

    return(
        <header>
            <Link to="/"><h1>#VANLIFE</h1></Link>

            <nav>
                <ul>
                    <li>{<Link to="/about">About</Link>}</li>
                    <li>{<Link to="/vans">Vans</Link>}</li>
                </ul>
            </nav>

        </header>
    )
}