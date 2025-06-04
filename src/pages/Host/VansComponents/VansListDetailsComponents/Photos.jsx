import { useParams, useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Photos(){
    const { van } = useOutletContext()

    return(
        <>
            {
                van !== null && <img src={van.imageUrl} alt={`${van.name} Image`} width={150} />
            }
        </>
    )
}