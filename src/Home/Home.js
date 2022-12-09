import React from 'react'
import "./Home.scss"
import { Link } from "react-router-dom"
import lamp from "../imgs/lamp.png"

const Home = () => {
    return (
        <div className="home">
            <div className="intro">
                <h1>Quiz App</h1>
                <img src={lamp} alt="logo" />
            </div>
            <Link to="/QuizInfo"><button>begin</button></Link>
        </div>
    )
}

export default Home