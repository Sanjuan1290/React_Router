import { redirect } from 'react-router-dom'

export async function requireAuth(){

    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

    console.log("ey");
    console.log(isLoggedIn);

    if(!isLoggedIn) {
        const response = redirect('/login?message=You must login first.')
        response.body = true
        throw response
    }

    return null
}