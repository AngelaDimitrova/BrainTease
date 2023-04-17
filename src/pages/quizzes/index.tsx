import Layout from "@/components/layout";
import QuizCard from "@/components/quiz_card";

const QuizPage = () => {

    const quizzes = [1, 2, 3, 4, 5];

return(
    <Layout>
        <div className="d-flex flex-column w-100 px-4">
            <div className="col col-4 mb-4">
                <input type="text" className="form-control mt-3" placeholder="Search" aria-label="Search" aria-describedby="search"/>
            </div>
            <div className="row w-100">
                {quizzes.map(quiz => (
                        <QuizCard key={quiz}/>
                ))}
            </div>

        </div>
    </Layout>
)
}

export default QuizPage;