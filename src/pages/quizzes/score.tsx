import Image from 'next/image';
import scoreImageUrl from '../../../public/score.png'
import manImageUrl from '../../.././public/man.png'
import Layout from "@/components/layout"

const ScorePage = () => {
    return (
        <Layout>
            <div className="d-flex h-100 flex-row align-items-center w-100">
                <div className="w-25 d-flex justify-content-center">
                    <Image src={scoreImageUrl} alt="score image" width='400' height='500'/>
                </div>
                <div className="w-50 ps-5 d-flex flex-column align-items-center">
                    <h5 className='mb-5 blue'>Congratulations! You've Made A New High Score.</h5>
                    <div className="text-center">
                        <h3>KEEP UP THE GOOD WORK AND WIN OUR LANGUAGE CERTIFICATE!</h3>
                    </div>
                    <div className='me-4 col-6 mt-5 d-flex justify-content-between'>
                        <button type="submit" className='btn btn-warning text-white'>Try Again</button>
                        <button type="submit" className='btn btn-warning text-white'>Try Another Test</button>
                    </div>
                </div>
                <div className="w-25 d-flex justify-content-center">
                    <Image src={manImageUrl} alt="man image" width='150' height='250'/>
                </div>
            </div>
        </Layout>
    )
}

export default ScorePage