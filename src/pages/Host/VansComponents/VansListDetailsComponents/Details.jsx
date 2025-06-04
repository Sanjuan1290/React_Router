import { useEffect, useState } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

export default function Details(){

    const { van } = useOutletContext()

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