import { Outlet, NavLink, useLoaderData } from "react-router-dom"
import VansListDetails from "../pages/Host/VansComponents/VansListDetails"
import NotFound from "./NotFound"
import { getVans } from "../api"

export function loader({params}){
    return getVans(params.id)
}

export default function VansListLayout(){

    const van = useLoaderData()

    if (van === undefined) return <h2>Loading...</h2>;
    if (van === null) return <NotFound />;
    
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