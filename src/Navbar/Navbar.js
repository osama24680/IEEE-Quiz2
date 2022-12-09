import React from 'react'
import './Navbar.scss'
import lamp from "../imgs/lamp.png"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "../Store/questionsSlice"

const Navbar = () => {
    let reduxData = useSelector(state => state.questions)
    let dispatch = useDispatch()
    console.log(localStorage.getItem("IEEE_user"))

    let navigate = useNavigate()

    // function logout() {
    //     console.log("hello osama after logout successfully")
    //     localStorage.removeItem("IEEE_user")

    // }
    return (
        <div className="Navbar">
            <div className="leftNavabr">
                <img src={lamp} alt="logo" />
                <h3>Quiz App</h3>
            </div>
            <div className="rightNavabr">

                {localStorage.getItem("IEEE_user") != null ? <p onClick={()=>dispatch(logout())}>Log Out</p> : (
                    <>
                        <p><Link to="/SignIn">Sign In</Link></p>
                        <p><Link to="/Register">Register</Link></p>
                    </>

                )}

            </div>
        </div>
    )
}

export default Navbar
