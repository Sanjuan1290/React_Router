import { useParams, Link } from "react-router-dom"

export default function VanDetail(props){

    const params = useParams()

    console.log(params.id);

    return(

        props.vans.map(van => (
            van.id === params.id ? 
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
                </section> : null
        ))
        
        
    )
}