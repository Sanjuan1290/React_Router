import { Link } from 'react-router-dom'

export default function Vans({vans}){

    return(
        <section className="vansPage">
            <h1>Explore our van options</h1>

            <section className="filter-section">
                <div className="filtered-container">
                    <ul>
                        <li>Simple</li>
                        <li>Luxury</li>
                        <li>Rugged</li>
                    </ul>
                </div>

                <button className="clearFiltered">Clear Filters</button>
            </section> 

            <section className="vans-container">
                { 
                    vans.length !== 0 &&  vans.map((van) => {
                        return <Link to={`/vans/${van.id}`} key={van.id}>
                                    <div className="van">
                                        <img src={van.imageUrl} alt={`${van.name} image`} />

                                        <div className="name_and_rent">
                                            <h3>{van.name}</h3>
                                            <h3>${van.price} <p>/day</p></h3>
                                        </div>

                                        <button className={
                                            van.type === "simple" ? 'simple' :
                                            van.type === "rugged" ? 'rugged' :
                                            van.type === "luxury" ? 'luxury' : null
                                        }
                                        >{van.type}</button>
                                    </div>
                                </Link>
                    })
                }
            </section>

        </section>


    )
}