import lamp from "../imgs/lamp.png"
import React, { useEffect } from 'react'
import "./EndPage.scss"
import { useSelector, useDispatch } from 'react-redux'
import { grade } from "../Store/questionsSlice"
import { Link } from "react-router-dom"
const EndPage = () => {

    let reduxData = useSelector(state => state.questions)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(grade())
    }, [dispatch])

    return (
        <div className="EndPage">
            <img src={lamp} alt="" />
            {reduxData.finalResult < 60 ? <h1>Oops {JSON.parse(localStorage.getItem("IEEE_user"))}!! Your Score Is {reduxData.finalResult}% </h1> : <h1>Congratulations Osama! Your Score Is {reduxData.finalResult}% </h1>}
            <Link to="/QuizInfo"><button>Play Again!</button></Link>
        </div>
    )
}

export default EndPage
