import Image from 'next/image';
import cardUrl from '../../public/cardImage.jpg'
import { BsGlobe } from 'react-icons/bs'
import { AiOutlineTrophy } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'

const QuizCard = () => {
    return(
        <div className="border border-gray col col-3 mx-5 d-flex flex-column p-3 mb-5">
            <Image src={cardUrl} alt="homepage image" width='280' height='200'/>
            <p className='text-center'>Basic C++ Programming</p>
            <div className='d-flex align-items-centers'><BsGlobe/> <span className='ms-2 mb-0'>English</span></div>
            <div><AiOutlineTrophy/><span className='ms-2 mb-0'>Certificate</span></div>
            <div><AiFillStar/><span className='ms-2 mb-0'>4.5</span></div>
            <button className="btn btn-warning text-white mt-3">Start</button>
        </div>
    )
}
export default QuizCard;