import { useOutletContext } from 'react-router-dom'

export default function Pricing(){
    const { van } = useOutletContext()

    return(
        <>
            {
                van !== null && <h2>${van.price.toFixed(2)}<span style={{fontSize: 14}}>/day</span></h2>
            }
        </>
    )
}