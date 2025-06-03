import { Outlet, NavLink } from "react-router-dom"
import VansListDetails from "../pages/Host/VansComponents/VansListDetails"

export default function VansListLayout(){

    return(
        <section className="vansListDetails_Layout">
            <NavLink to='..' relative="path"><span>Back to all vans</span></NavLink>

            <div>
                <VansListDetails />
                <Outlet />
            </div>
        </ section>
    )
}