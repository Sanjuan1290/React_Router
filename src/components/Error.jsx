import { useRouteError } from 'react-router-dom'

export default function Error(){
    
    const error = useRouteError()

    return(
        <>
        <hr />
        <br />
            <h1>Error Occured: {error.message}</h1>
            <pre>statusText: {error.statusText}</pre>
            <pre>status: {error.status}</pre>
        <br />
        </>
    )
}