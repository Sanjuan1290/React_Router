import { useLoaderData } from "react-router-dom"

export function loader(obj){
    const message = new URL(obj.request.url).searchParams.get('message')
    return message
}

export default function Login(){

    const message = useLoaderData()

    function handleSubmitForm(event){
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value
        
        console.log('Email: ' + email);
        console.log("Password: " + password);
    }
    return(
        <>
            <form onSubmit={handleSubmitForm} className="login">
                <h1>Sign in to your account</h1>
                <h2>{message}</h2>

                <input name="email" type="email" placeholder="example@gmail.com" defaultValue="robertSanJuan@gmail.com"/>
                <input name="password" type="password" placeholder="password" defaultValue="1234567890"/>

                <button>Log in</button>
            </form>
        </>
    )
}