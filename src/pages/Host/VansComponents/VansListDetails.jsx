import { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom"

export default function VansListDetails(){

    const params = useParams()

    const [van, setVan] = useState(null)

    useEffect(()=> {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [])

    return(
        <>
            {
                van !== null && <div className='vanListDetails'>
                    <img src={van.imageUrl} alt={van.name} />

                    <div>
                        <button className={
                                            van.type === "simple" ? 'simple' :
                                            van.type === "rugged" ? 'rugged' :
                                            van.type === "luxury" ? 'luxury' : null
                                        }>{van.type}</button>
                        <h2>{van.name}</h2>
                        <p>{`$${van.price}`}<span>/day</span></p>
                    </div>
                </div>
            }

           {
                van !== null && <nav>
                    <ul>
                        <NavLink className={obj => obj.isActive ? 'activeNav' : ''} to="details"><li>Details</li></NavLink>
                        <NavLink className={obj => obj.isActive ? 'activeNav' : ''} to="pricing"><li>Pricing</li></NavLink>
                        <NavLink className={obj => obj.isActive ? 'activeNav' : ''} to="photos"><li>Photos</li></NavLink>
                    </ul>
                </nav>
           }
        </>
    )
}