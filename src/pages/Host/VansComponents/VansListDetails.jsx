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

    console.log(van);

    return(
        <section className="vansListDetails">
            <NavLink><span>Back to all vans</span></NavLink>
            
        </section>
    )
}