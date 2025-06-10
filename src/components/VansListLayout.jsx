import { Outlet, NavLink, useLoaderData } from "react-router-dom"
import VansListDetails from "../pages/Host/VansComponents/VansListDetails"
import { getVans } from "../api"
import { requireAuth } from "../util"

export async function loader({params, request}){
    await requireAuth(request)
    return getVans(params.id)
}

export default function VansListLayout(){

    const van = useLoaderData()

    return(
        <>
        {
            <section className="vansListDetails_Layout">
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