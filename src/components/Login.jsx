import React, { useEffect } from "react"
import { useLoaderData, useNavigate, Form, useActionData, redirect, useNavigation } from "react-router-dom"
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
        return err.message;
    }
}


export default function Login() {
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()    

    return (
        <div className="login">
            <h1>Sign in to your account</h1>
            
            {
                errorMessage ?
                <h3>{errorMessage}</h3> :
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
                <button disabled={navigation.state === 'submitting'}>{
                        navigation.state === 'submitting' ? 'Logging in' : 'Log in'
                    }</button>
            </Form>
        </div>
    )
}