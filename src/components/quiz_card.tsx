import Image from 'next/image';
import cardUrl from '../../public/cardImage.jpg'
import { BsGlobe } from 'react-icons/bs'
import { AiOutlineTrophy } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import Link from "next/link";
import {Quiz} from "@/pages/quizzes";

const QuizCard = (quiz:Quiz) => {
    return(
        <div className="border border-gray col col-3 mx-5 d-flex flex-column p-3 mb-5">
            <Image src={cardUrl} alt="homepage image" width='280' height='200'/>
            <p className='text-center'>{ quiz.title }</p>
            <div className='d-flex align-items-centers'>{ quiz.description }</div>
            <Link href={'/quizzes/' + quiz.id } className="btn btn-warning text-white mt-3">Start</Link>
        </div>
    )
}
export default QuizCard;