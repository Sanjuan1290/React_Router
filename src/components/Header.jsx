import { NavLink, useNavigate} from 'react-router-dom'


export default function Header(){
    const navigate = useNavigate()
    
    function logout(){
        localStorage.setItem('isLoggedIn', false)
        navigate('/login')
    }
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
                        <li><button onClick={logout}>logout</button></li>
                    </ul>
                </nav>

            </header>

        </>
    )
}