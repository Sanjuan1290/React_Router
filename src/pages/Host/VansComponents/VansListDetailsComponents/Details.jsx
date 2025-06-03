import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details(){

    const [van, setVans] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVans(data.vans))

        console.log(van);
    }, [])


    return(
        <>
            {
                van !== null && <div className='details-container'>
                    <p><strong>Name:</strong> {van.name}</p>
                    <p><strong>Category:</strong> {van.type}</p>
                    <p><strong>Description:</strong> {van.description}</p>
                    <p><strong>Visibility:</strong> Public</p>
                </div>
            }
        </>
    )
}