import React from 'react'
import logo from "../../assets/vite.svg"
import "./jobBrief.css"

const JobBrief = () => {
  return (
    <div className='jobBrief'>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="details">
            <div>Frontend Developer</div>
            <div>
                <div>11-50</div>
                <div>50000</div>
                <div>Delhi</div>
            </div>
            <div>
                <div>Office</div>
                <div>Full Time</div>
            </div>
        </div>
        <div className="skillsReq">
            <div>
                <div>Frontend</div>
                <div>CSS</div>
                <div>JS</div>
                <div>React</div>
            </div>
        </div>
    </div>
  )
}

export default JobBrief