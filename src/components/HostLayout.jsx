import { Outlet, NavLink} from 'react-router-dom'

export default function Layout() {

  return (
    <>
      <section className="hostLayout-container">
        <ul>
          <li><NavLink 
          to="/host"
            end
            className={obj => obj.isActive ? 'activeNav' : ''}
          >Dashboard</NavLink></li>

          <li><NavLink 
            to="/host/income"
            className={obj => obj.isActive ? 'activeNav' : ''}
          >Income</NavLink></li>

          <li><NavLink 
            to="/host/vans"
            className={obj => obj.isActive ? 'activeNav' : ''}
          >Vans</NavLink></li>

          <li><NavLink 
            to="/host/reviews"
            className={obj => obj.isActive ? 'activeNav' : ''}
          >Reviews</NavLink></li>
        </ul>
      </section>
      <Outlet />
    </>
  )
}
