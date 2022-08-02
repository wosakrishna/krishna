import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>Chess Olympiad Open 2022</h4>
            <h1>Games</h1>
          </div>

          <div className='content-section mtop d_flex'>
          {/* <iframe src="https://live.followchess.com/#!44th-olympiad-open-2022" width="100%" height="800" frameborder="2"></iframe> */}
          
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
