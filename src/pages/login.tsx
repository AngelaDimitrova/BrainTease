import Image from 'next/image';
import hatImageUrl from '../../public/hat.png'
import Layout from "@/components/layout"
import {useContext, useState} from "react";
import UserContext, {User} from "@/context/UserContext";
import {useRouter} from "next/router";

const LoginPage = () => {

    // @ts-ignore
    const { login } = useContext(UserContext);
    const router = useRouter();

    // Variables
    const [loginStatus, setLoginStatus] = useState<boolean | null>(null);
    const [formResponse, setFormResponse] = useState<string | null>(null);

    // Handles the submit event on form submit.
    // @ts-ignore
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        // Get data from the form.
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        // Send the data to the server in JSON format.
        const params = new URLSearchParams(data);
        const encodedData = params.toString();

        // API endpoint where we send form data.
        const endpoint = 'http://localhost:9091/authentication/login?' + encodedData;

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
        };

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options);

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.text();
        if(result !== "Invalid username or password") {
            // Successful registration
            let user:User = {
                name: result
            }
            login(user);
            await router.push('/');
        } else {
            // Unsuccessful registration
            setFormResponse(result);
            setLoginStatus(false);
            console.log("Here 3");
        }
    };

    // Print registration status
    function renderLoginStatus() {
        if(loginStatus === false) {
            return (
                <div className={'text-danger'}>{ formResponse }</div>
            )
        }
        return null;
    }

return (
    <Layout>
        <div className="d-flex h-100 flex-row align-items-center w-100">
            <div className="w-50 ps-5">
                <h3 className='mb-5'>Log in</h3>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex flex-column'>
                        <div className='d-flex fs-6 col-12 mb-3'>
                            <label htmlFor="username" className='me-4 col-3'>Email Address:</label>
                            <input type="text" id="username" name="username" className='border-0 w-100 bg-lightgray' />
                        </div>
                        <div className='d-flex fs-6 col-12 mb-3'>
                            <label htmlFor="password" className='me-4 col-3'>Password:</label>
                            <input type="password" id="password" name="password" className='border-0 w-100 bg-lightgray' />
                        </div>
                        <div className='d-flex fs-6 col-12 mb-3'>
                            <input className="form-check-input me-3" type="checkbox" value="" id="rememberMe"/>
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember me  
                            </label>      
                        </div>
                    <button type="submit" className='btn btn-warning text-white'>Log in</button>
                    </div>
                </form>

                { renderLoginStatus() }
            </div>
            <div className="w-50 d-flex justify-content-center">
                <Image src={hatImageUrl} alt="homepage image" width='400' height='500'/>
            </div>
        </div>
    </Layout>
    )
}
export default LoginPage