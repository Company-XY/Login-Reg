import React from "react"
import './Register.css'
import '../../App.css'

import {Link, NavLink} from 'react-router-dom'

//import assets
import video from '../../Assets/video.mp4.mp4'
import logo from '../../Assets/pexels-lan-yao-6751982.jpg'

//Import Icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'




const Register = () => {
    return (
        <div className="registerPage flex"> 
        <div className="container flex">
        <div className="videoDiv">
        <video src={video} autoPlay muted loop></video>
        <div className="textDiv">
            <h2 className="title">
                Sign Up now or Login as Virtual Assistant or Client
            </h2>
            <p>Adopt assist.africa</p>
        </div>
        <div className="footerDiv flex">
            <span className="text">
                Already Registered?
            </span>
            <Link to = {'/login'}>
                <button className="btn"> Login</button>
            </Link>
        </div>
        </div>
        <div className="formDiv flex">
            <div className="headerDiv">
                <img src={logo} alt="Logo Image" />
                <h3>Welcome and Sign Up!</h3>
            </div>
            <form action="" className="form grid">
                <span className="showMessage">Sign Up here</span>

                <div className="inputDiv">
                    <label htmlFor="username"> Select Role</label>
                    <div className="input flex">
                        <FaUserShield className="icon"/>
                        <select name="role" id="role" selected="Client">
                            <option value="Client">Client</option>
                            <option value="Freelancer">Freelancer</option>
                        </select>
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="username"> Select Account type</label>
                    <div className="input flex">
                        <FaUserShield className="icon"/>
                        <select name="account" id="account" selected="Individual">
                            <option value="Business">Business</option>
                            <option value="Individual">Individual</option>
                        </select>
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="username"> Name</label>
                    <div className="input flex">
                        <FaUserShield className="icon"/>
                        <input type="text" id="username" placeholder="Enter Username"/>
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="username"> Email</label>
                    <div className="input flex">
                        <MdMarkEmailRead className="icon"/>
                        <input type="email" id="email" placeholder="Enter Email"/>
                    </div>
                </div>


                <div className="inputDiv">
                    <label htmlFor="password"> Password</label>
                    <div className="input flex">
                        <BsFillShieldLockFill className="icon"/>
                        <input type="password" id="password" placeholder="Enter Password"/>
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="password">Repeat Password</label>
                    <div className="input flex">
                        <BsFillShieldLockFill className="icon"/>
                        <input type="password" id="password" placeholder="Enter Password"/>
                    </div>
                </div>
                <button type="submit" className="btn flex">
                    <span>Register</span>
                    <AiOutlineSwapRight className="icon"/>
                </button>
                <span className="forgotPassword">
                    Forgot Password? <a href="">Click here</a>
                </span>
                 

            </form>
        </div>
        </div>     
        </div>
    )
}

export default Register