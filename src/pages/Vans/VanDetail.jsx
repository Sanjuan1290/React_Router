import { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from "react-router-dom"
import '../../server'
import NotFound from '../../components/NotFound'

export default function VanDetail(){

    const [van, setVan] = useState(undefined)

    const params = useParams()
    const location = useLocation()

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
            .catch(error =>{
                console.error(error);
                setVan(null)
            })
    }, [params.id])

    if(van === undefined) return <h1>Loading...</h1>
    if (van === null) return <NotFound></NotFound>

    return(

        van !== null &&                 
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