import { NavLink, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../../api'
import { requireAuth } from '../../../util'

export async function loader({params, request}){
    await requireAuth(request)
    return getHostVans(params.id)
}

export default function VansList(){

    const data = useLoaderData()

    const listedVans = data.map(van => (
                <NavLink to={`${van.id}`} key={van.id}>
                    <div>
                        <img 
                            src={`${van.imageUrl}`} 
                            alt={`${van.name}`} />
                        
                        <div>
                            <h2>{`${van.name}`}</h2>
                            <p>${`${van.price}`}/day</p>
                        </div>
                    </div>
                </NavLink>
    ))


    return(
        <section className="vansList">
            <h1>Your listed vans</h1>

            <div className="listedVans-container">
                {
                    (data.length !== 0 || data) && listedVans
                }
            </div>
        </section>
    )
}