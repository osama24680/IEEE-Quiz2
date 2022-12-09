import React, { useEffect } from 'react'
import { UilSpinnerAlt } from '@iconscout/react-unicons'
import "./QuestionsPage.scss"
import lamp from "../imgs/lamp.png"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { getanswer, Logic, NextQuestion } from "../Store/questionsSlice"
import { UilAngleRightB } from '@iconscout/react-unicons'
const QuestionsPage = () => {

    let navigate = useNavigate()
    let reduxData = useSelector(state => state.questions)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(Logic())
        if (reduxData.lastQuestion) {
            navigate("/EndPage")
        }
    }, [reduxData?.currentIndex, reduxData?.questions, dispatch, navigate, reduxData?.lastQuestion])

    return (
        <>
            {
                reduxData.loading ? <div className="loading_spin"><UilSpinnerAlt size="70" /> </div> : (
                    <div className="QuestionsPage">
                        <div className="QuestionsPage_logo">
                            <img src={lamp} alt="" />
                        </div>
                        <div className="QuestionsPage_questios">
                            <p> {reduxData.currentIndex + 1}- {reduxData.loading ? "........" : (reduxData.questions?.[reduxData.currentIndex]?.question.slice(0, reduxData.questions?.[reduxData.currentIndex]?.question.length - 1))} ?</p>
                            <div className="answers" id="allAnswers">
                                {reduxData.shuffledAnswers?.map((item, index) => {
                                    return (
                                        <button disabled={reduxData.isSelected} id={item} key={index} onClick={(e) => dispatch(getanswer(e))}>{item}</button>
                                    )
                                })}
                            </div>

                        </div>
                        
                        <button disabled={!reduxData.isSelected} className={`nextBTN`} onClick={() => dispatch(NextQuestion())}><UilAngleRightB size="200" /></button>
                    </div>
                )
            }
        </>
    )
}

export default QuestionsPage