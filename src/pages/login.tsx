import Image from 'next/image';
import hatImageUrl from '../../public/hat.png'
import Layout from "@/components/layout"

const LoginPage = () => {
return (
    <Layout>
        <div className="d-flex h-100 flex-row align-items-center w-100">
            <div className="w-50 ps-5">
                <h3 className='mb-5'>Log in</h3>
                <form action="/send-data-here" method="post">
                    <div className='d-flex flex-column'>
                        <div className='d-flex fs-6 col-12 mb-3'>
                            <label htmlFor="email" className='me-4 col-3'>Email Address:</label>
                            <input type="email" id="email" name="email" className='border-0 w-100 bg-lightgray' />
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
            </div>
            <div className="w-50 d-flex justify-content-center">
                <Image src={hatImageUrl} alt="homepage image" width='400' height='500'/>
            </div>
        </div>
    </Layout>
    )
}
export default LoginPage