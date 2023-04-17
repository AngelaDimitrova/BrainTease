import Image from 'next/image';
import hatImageUrl from '../../public/hat.png'
import Layout from "@/components/layout"

const RegisterPage = () => {
return (
    <Layout>
        <div className="d-flex h-100 flex-row align-items-center w-100">
            <div className="w-50 ps-5">
                <h3 className='mb-5'>Register</h3>
                <form action="/send-data-here" method="post">
                    <div className='d-flex flex-column'>
                    <div className='d-flex fs-6 col-12 mb-3'>
                            <label htmlFor="name" className='me-4 col-3'>First Name:</label>
                            <input type="text" id="name" name="name" className='border-0 w-100 bg-lightgray' />
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
            </div>
            <div className="w-50 d-flex justify-content-center">
                <Image src={hatImageUrl} alt="homepage image" width='400' height='500'/>
            </div>
        </div>
    </Layout>
    )
}
export default RegisterPage