import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import '../../server'

export default function VanDetail(props){

    const [van, setVan] = useState(null)

    const params = useParams()

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return(

        van !== null &&                 
                <section key={van.id} className="vanDetails">
                    <Link to='/vans'><span>Back to all vans</span></Link>

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