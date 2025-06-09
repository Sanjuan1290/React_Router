import React, { useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const message = useLoaderData()

    const [state, setState] = React.useState('idle');
    const [error, setError] = React.useState(null)

    useEffect(()=>{
        if(state === 'submitting') setError(null)
    }, [state])

    function handleSubmit(e) {
        e.preventDefault()
        console.log('click');
        setState('submitting')
        loginUser(loginFormData)
            .then(data => { console.log(data) })
            .catch(err => { setError(err) })
            .finally(()=>{ setState('idle') })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login">
            <h1>Sign in to your account</h1>
            
            {
                error !== null ?
                <h3>{error.message}</h3> :
                message && <h3 >{message}</h3>
            }
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={loginFormData.password}
                />
                <button disabled={state === 'submitting'}>{
                        state === 'submitting' ? 'Logging in' : 'Log in'
                    }</button>
            </form>
        </div>
    )
}