import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom'
import { useEffect, useState, Suspense } from 'react'
import {getVans} from '../../api'
import { requireAuth } from '../../util'

export async function loader({ params, request }){
    await requireAuth(request)
    return defer({vans: getVans(params.id)})
}

export default function Vans(){
    const { vans } = useLoaderData()

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

    function renderVanCards(vans){ 
            return vans.map((van) => {
                return (filterTypes.includes(van.type) || filterTypes.length === 0) && 
                                <Link to={`/vans/${van.id}`} key={van.id} state={{search: searchParams.toString()}} >
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
                            className={searchParams.getAll('filter').includes('simple') ? 'activeFilterType' : ''}>
                                Simple</button></li>
                        <li><button 
                            onClick={()=>{handleFilterClick('luxury')}}
                            className={searchParams.getAll('filter').includes('luxury') ? 'activeFilterType' : ''}>
                                Luxury</button></li>
                        <li><button 
                            onClick={()=>{handleFilterClick('rugged')}}
                            className={searchParams.getAll('filter').includes('rugged') ? 'activeFilterType' : ''}>
                                Rugged</button></li>
                    </ul>
                </div>

                <button className="clearFiltered" onClick={clearFilter}>Clear Filters</button>
            </section> 

            <section className="vans-container">
                <Suspense fallback={<h2>Loading vans...</h2>}>
                    <Await resolve={vans}>
                        {(data)=> renderVanCards(data)}
                    </Await>
                </Suspense>
            </section>

        </section>


    )
}