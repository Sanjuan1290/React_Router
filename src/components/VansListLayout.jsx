import { Outlet, NavLink, useParams } from "react-router-dom"
import VansListDetails from "../pages/Host/VansComponents/VansListDetails"
import { useEffect, useState } from "react"

export default function VansListLayout(){
    const { id } = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [])

    return(
        <>
        {
            van && van !== null && <section className="vansListDetails_Layout">
                <NavLink to='..' relative="path"><span>Back to all vans</span></NavLink>

                <div>
                    <VansListDetails van={van} />
                    <Outlet context={{van}}/>
                </div>
            </ section>
        }
        </>
    )
}