import { NavLink, useLoaderData } from 'react-router-dom'
import { getVans } from '../../../api'

export function loader({params}){
    return getVans(params.id)
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