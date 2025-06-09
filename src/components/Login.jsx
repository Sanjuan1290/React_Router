import React from "react"
import { useLoaderData } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const message = useLoaderData()

    function handleSubmit(e) {
        e.preventDefault()
        loginUser(loginFormData)
            .then(data => console.log(data))
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
            {message && <h3 >{message}</h3>}
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
                <button>Log in</button>
            </form>
        </div>
    )
}