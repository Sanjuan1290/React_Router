import { Link, useLocation, useLoaderData } from "react-router-dom"
import '../../server'
import NotFound from '../../components/NotFound'
import { getVans } from '../../api'
import { requireAuth } from "../../util"

export async function loader({params, request}){
    await requireAuth(request)
    return getVans(params.id)
}

export default function VanDetail(){

    const location = useLocation()
    const van = useLoaderData()

    if(van === undefined) return <h1>Loading...</h1>
    if (van === null) return <NotFound></NotFound>

    return(
            
            <section key={van.id} className="vanDetails">
                <Link to={`/vans?${location.state?.search}`}><span>Back to all vans</span></Link>

                <img src={van.imageUrl} alt="Van Image" />

                <button className={`vanType ${
                    van.type === "simple" ? 'simple' :
                    van.type === "rugged" ? 'rugged' :
                    van.type === "luxury" ? 'luxury' : null
                }`}
                >{van.type}</button>

                <h1>{van.name}</h1>

                <h3>{`$${van.price}`}<span>/day</span></h3>

                <small>{van.description}</small>

                <button className="rentBtn">Rent this van</button>
            </section>
                 
    )
}