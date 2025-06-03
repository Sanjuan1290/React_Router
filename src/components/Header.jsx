import { NavLink} from 'react-router-dom'


export default function Header(props){

    return(
        <>
            <header>
                <NavLink to="/"><h1>#VANLIFE</h1></NavLink>

                <nav>
                    <ul>
                        <li><NavLink
                            to="/host" 
                            className={obj => obj.isActive ? 'activeNav' : null}>Host</NavLink></li>
                        <li><NavLink
                            to="/about" 
                            className={obj => obj.isActive ? 'activeNav' : null}>About</NavLink></li>
                        <li><NavLink
                            to="/vans" 
                            className={obj => obj.isActive ? 'activeNav' : null}>Vans</NavLink></li>
                    </ul>
                </nav>

            </header>

        </>
    )
}