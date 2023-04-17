import Image from 'next/image';
import homepageImageUrl from '../../../public/homepage.png'
import Layout from "@/components/layout"

const HomePage = () => {
return (
    <Layout>
        <div className="d-flex h-100 flex-row align-items-center w-100">
            <div className="w-50">
                <h1 className="mb-4">Find the right faculty for you!</h1>
                <div className="border-start border-secondary ps-2 text-secondary mb-3">
                    <p className="m-0">Not sure what your dream career is?</p>
                    <p className="m-0">Not sure what kind of degree can help</p>
                    <p className="m-0">you get where you want to go?</p>
                    <p className="m-0">Our quizzes can help you.</p>
                </div>
                <a className="btn btn-warning text-white">Start Solving</a>
            </div>
            <div className="w-50">
                <Image src={homepageImageUrl} alt="homepage image" width='500' height='500'/>
            </div>
        </div>
    </Layout>
)
}
export default HomePage