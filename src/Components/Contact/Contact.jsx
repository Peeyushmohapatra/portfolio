import React from 'react'
import "./contact.css"
import { Link } from 'react-router-dom'


export const Contact = () => {
  return (
    <div className='contact'>
        <div className="trial contactTrial"></div>
        <div className="contactDetails">
            <div className='details'>
                <div className="leftContact">
                <i class="fa-regular fa-envelope"></i> -
                    <p>Email</p>
                </div>
                <div className="rightContact">
                    peeyushm1998@gmail.com
                </div>
            </div>
            <div className='details'>
                <div className="leftContact">
                <i class="fa-solid fa-address-book"></i> -
                    Phone Number 
                </div>
                <div className="rightContact">
                    +91-7008951746
                    +91-9165215554
                </div>
            </div>
            <div className='details'>
                <div className="leftContact">
                <i class="fa-brands fa-linkedin"></i> -
                    LinkedIn
                </div>
                <div className="rightContact">
                    <Link to={"https://www.linkedin.com/in/peeyushmohapatra/"}>LinkedeIn</Link>
                </div>
            </div>
            <div className='details'>
                <div className="leftContact">
                <i class="fa-brands fa-github"></i> -
                    GitHub
                </div>
                <div className="rightContact">
                    <Link to={"https://github.com/Peeyushmohapatra"}>Github</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
