import Layout from "@/components/layout";
import QuizCard from "@/components/quiz_card";
import {useEffect, useState} from "react";

export interface Quiz {
    id: number,
    title: string,
    description: string,
}

const QuizPage = () => {

    const [quizzes, setQuizzes] = useState<Quiz[]>([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch('http://localhost:9091/api/quizzes');
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            return res.json();
        }
        getData().then(response => {
            const convertedQuizzes: Quiz[] = response as Quiz[];
            setQuizzes(convertedQuizzes);
        })
    }, []);

    return(
        <Layout>
            <div className="d-flex flex-column w-100 px-4">
                <div className="col col-4 mb-4">
                    <input type="text" className="form-control mt-3" placeholder="Search" aria-label="Search" aria-describedby="search"/>
                </div>
                <div className="row w-100">
                    {quizzes.map((quiz, id) => (
                        <QuizCard key={id} id={quiz.id} title={quiz.title} description={quiz.description}/>
                    ))}
                </div>

            </div>
        </Layout>
    )
}

export default QuizPage;