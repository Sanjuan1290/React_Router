import React, { useEffect } from "react"
import { useLoaderData, useNavigate, Form, useActionData, redirect } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    console.log("Action Function");

    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const data = await loginUser({ email, password });
        localStorage.setItem('isLoggedIn', JSON.stringify(true));

        const redirectResponse = redirect('/host');
        redirectResponse.body= true
        return redirectResponse

    } catch (err) {
        console.log("error Bossing", err);
        return null;
    }
}


export default function Login() {
    const [state, setState] = React.useState('idle');
    const [error, setError] = React.useState(null)
    const message = useLoaderData()
    const navigate = useNavigate()

    useEffect(()=>{
        if(state === 'submitting') setError(null)
    }, [state])

    function handleSubmit(e) { 
        e.preventDefault()
        console.log('click');
        setState('submitting')
        loginUser(loginFormData)
            .then(data => { 
                console.log('login success', data);
                navigate('/host', {replace: true}) 
            })
            .catch(err => { setError(err) })
            .finally(()=>{ setState('idle') })
    }

    return (
        <div className="login">
            <h1>Sign in to your account</h1>
            
            {
                error !== null ?
                <h3>{error.message}</h3> :
                message && <h3 >{message}</h3>
            }
            <Form method="POST" replace={true}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                />
                <button disabled={state === 'submitting'}>{
                        state === 'submitting' ? 'Logging in' : 'Log in'
                    }</button>
            </Form>
        </div>
    )
}