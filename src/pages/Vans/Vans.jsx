import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Vans({vans}){

    const [filterTypes, setFilterTypes] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setFilterTypes(searchParams.getAll('filter'));
    }, []);

    useEffect(()=> {
        const params = new URLSearchParams(searchParams)
        params.delete('filter')

        filterTypes.forEach(key => {
            params.append('filter', key)
        })


        setSearchParams(params)

    }, [filterTypes, searchParams])

    const vanOptions =  vans.map((van) => {
                    return (filterTypes.includes(van.type) || filterTypes.length === 0) && <Link to={`/vans/${van.id}`} key={van.id}>
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

    function handleFilterClick(newKey) {

        setFilterTypes(prevKey => (
            prevKey.includes(newKey) ? prevKey.filter(key => key !== newKey) : [...prevKey, newKey]
        ))
    }    
    function clearFilter(){
        setFilterTypes([])
    }

    return(
        <section className="vansPage">
            <h1>Explore our van options</h1>

            <section className="filter-section">
                <div className="filtered-container">
                    <ul>
                        <li><button 
                            onClick={()=>{handleFilterClick('simple')}}
                            className={filterTypes.includes('simple') ? 'activeFilterType' : ''}>
                                Simple</button></li>
                        <li><button 
                            onClick={()=>{handleFilterClick('luxury')}}
                            className={filterTypes.includes('luxury') ? 'activeFilterType' : ''}>
                                Luxury</button></li>
                        <li><button 
                            onClick={()=>{handleFilterClick('rugged')}}
                            className={filterTypes.includes('rugged') ? 'activeFilterType' : ''}>
                                Rugged</button></li>
                    </ul>
                </div>

                <button className="clearFiltered" onClick={clearFilter}>Clear Filters</button>
            </section> 

            <section className="vans-container">
                { 
                    vans.length !== 0 && vanOptions
                }
            </section>

        </section>


    )
}