import { NavLink, useLoaderData, defer, Await } from 'react-router-dom'
import { Suspense } from 'react'
import { getHostVans } from '../../../api'
import { requireAuth } from '../../../util'

export async function loader({request}){
    await requireAuth(request)
    return defer({vans: getHostVans()})
}

export default function VansList(){

    const { vans } = useLoaderData()

    function listedVans(vans) { 
        return vans.map(van => (
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
    }


    return(
        <section className="vansList">
            <h1>Your listed vans</h1>

            <div className="listedVans-container">
                <Suspense fallback={<h2>Vans Loading...</h2>}>
                    <Await resolve={vans}>
                        {(data) => listedVans(data)}
                    </Await>
                </Suspense> 
            </div>
        </section>
    )
}