import Image from 'next/image';
import hatImageUrl from '../../public/hat.png'
import Layout from "@/components/layout"
import {useState} from "react";

const RegisterPage = () => {

    // Variables
    const [registrationStatus, setRegistrationStatus] = useState<boolean | null>(null);
    const [formResponse, setFormResponse] = useState<string | null>(null);

    // Handles the submit event on form submit.
    // @ts-ignore
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        // Get data from the form.
        const data = {
            email: event.target.email.value,
            username: event.target.username.value,
            password: event.target.password.value,
            repeatPassword: event.target.confirmPassword.value,
            name: event.target.name.value,
            surname: event.target.surname.value,
        };

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data);

        // API endpoint where we send form data.
        const endpoint = 'http://localhost:9091/authentication/registerUser';

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options);
        if(!response.ok) {
            console.log("Here 1");
            setRegistrationStatus(false);
            setFormResponse("An unexpected error happened. Most likely, your username or email is already in use");
            return false;
        }

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.text();
        if(result === "User has been created") {
            // Successful registration
            setRegistrationStatus(true);

            // Reset fields
            event.target.email.value = "";
            event.target.username.value = "";
            event.target.password.value = "";
            event.target.confirmPassword.value = "";
            event.target.name.value = "";
            event.target.surname.value = "";
            console.log("Here 2");
        } else {
            // Unsuccessful registration
            setFormResponse(result);
            setRegistrationStatus(false);
            console.log("Here 3");
        }
    };

    // Print registration status
    function renderRegistrationStatus() {
        if(registrationStatus) {
            return (
                <div className={'text-success'}>User has been registered</div>
            )
        } else if(registrationStatus === false) {
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
                <h3 className='mb-5'>Register</h3>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex flex-column'>
                        <div className='d-flex fs-6 col-12 mb-3'>
                            <label htmlFor="name" className='me-4 col-3'>First Name:</label>
                            <input type="text" id="name" name="name" className='border-0 w-100 bg-lightgray' />
                        </div>
                        <div className='d-flex fs-6 col-12 mb-3'>
                            <label htmlFor="surname" className='me-4 col-3'>Last Name:</label>
                            <input type="text" id="surname" name="surname" className='border-0 w-100 bg-lightgray' />
                        </div>
                        <div className='d-flex fs-6 col-12 mb-3'>
                            <label htmlFor="username" className='me-4 col-3'>Username:</label>
                            <input type="text" id="username" name="username" className='border-0 w-100 bg-lightgray' />
                        </div>
                        <div className='d-flex fs-6 col-12 mb-3'>
                            <label htmlFor="email" className='me-4 col-3'>Email Address:</label>
                            <input type="email" id="email" name="email" className='border-0 w-100 bg-lightgray' />
                        </div>
                        <div className='d-flex fs-6 col-12 mb-3'>
                            <label htmlFor="password" className='me-4 col-3'>Password:</label>
                            <input type="password" id="password" name="password" className='border-0 w-100 bg-lightgray' />
                        </div>
                        <div className='d-flex fs-6 col-12 mb-3'>
                            <label htmlFor="confirmPassword" className='me-4 col-3'>Confirm Password:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className='border-0 w-100 bg-lightgray' />
                        </div>
                        <p>Already have an account?<span className='text-warning ms-3 mb-3'><a href='login'>Login here</a></span></p>    
                    <button type="submit" className='btn btn-warning text-white'>Register</button>
                    <p className='fs-7 text-center text-gray'>By Register up you agree to receive updates and special offers.</p>
                    </div>
                </form>

                { renderRegistrationStatus() }
            </div>
            <div className="w-50 d-flex justify-content-center">
                <Image src={hatImageUrl} alt="homepage image" width='400' height='500'/>
            </div>
        </div>
    </Layout>
    )
}
export default RegisterPage