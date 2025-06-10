import { redirect } from 'react-router-dom'

export async function requireAuth(request){

    const pathname = new URL(request.url).pathname 

    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

    if(!isLoggedIn) {
        const response = redirect(`/login?message=You must login first.&redirectTo=${pathname}`)
        response.body = true
        throw response
    }

    return null
}