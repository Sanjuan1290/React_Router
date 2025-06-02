import { Outlet, Link, useLocation } from 'react-router-dom'

export default function Layout() {
  const urlLocation = useLocation()

  return (
    <>
      <section className="hostLayout-container">
        <ul>
          <li className={urlLocation.pathname === '/host' ? 'activeNav' : ''}><Link to="/host">Dashboard</Link></li>
          <li className={urlLocation.pathname === '/host/income' ? 'activeNav' : ''}><Link to="/host/income">Income</Link></li>
          <li className={urlLocation.pathname === '/host/reviews' ? 'activeNav' : ''}><Link to="/host/reviews">Reviews</Link></li>
        </ul>
      </section>
      <Outlet />
    </>
  )
}
