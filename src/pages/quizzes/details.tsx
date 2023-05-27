import Layout from "@/components/layout"

const QuizDetails = () => {
    return (
        <Layout>
            <div className="d-flex justify-content-center align-items-center h-10 mt-4 p-5 bg-lightgray">
                <div className="w-50">
                    <div className="quiz-question mb-5 text-center">
                        <h5>Question 1:</h5>
                        <p>What is the capital of France?</p>
                    </div>
                    <form className="d-flex flex-column align-items-center">
                        <div className='d-flex fs-6 col-12 mb-3 border-0 w-75 bg-yellow'>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="answer"
                                id="answer1"
                                value="a"
                            />
                            <label htmlFor="answer1">
                                Paris
                            </label>
                        </div>
                        <div className='d-flex fs-6 col-12 mb-3 border-0 w-75 bg-yellow'>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="answer"
                                id="answer2"
                                value="b"
                            />
                            <label htmlFor="answer2">
                                Rome
                            </label>
                        </div>
                        <div className='d-flex fs-6 col-12 mb-3 border-0 w-75 bg-yellow'>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="answer"
                                id="answer3"
                                value="c"
                            />
                            <label htmlFor="answer3">
                                Berlin
                            </label>
                        </div>
                        <div className='d-flex fs-6 col-12 mb-3 border-0 w-75 bg-yellow'>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="answer"
                                id="answer4"
                                value="d"
                            />
                            <label htmlFor="answer4">
                                London
                            </label>
                        </div>
                        <button type="submit" className='btn btn-warning text-white'>Next Question</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
export default QuizDetails
