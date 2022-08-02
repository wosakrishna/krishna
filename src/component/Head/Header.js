import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logochess.png"
import contact1 from "../Contact/contact1.png";

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='size'>
           <img src={logo} alt='' height="70px"/>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile navlink" : "link f_flex uppercase navlink"}  onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>features</a>
              </li>
              <li>
                <a href='#portfolio'>portfolio</a>
              </li>
              {/* <li>
                <a href='#resume'>resume</a>
              </li> */}
              <li>
                <a href='#clients'>clients</a>
              </li>
              {/* <li>
                <a href='#blog'>blog</a>
              </li> */}
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <button className='home-btn' onClick={toggleModal}>BOOK YOUR DEMO</button>
              </li>
            </ul>
            {modal && (
         <div className="modal">
         <div onClick={toggleModal} className="overlay"></div>
         <div className="modal-content d_flex">
           <div className="modal-img left">
           <div className="details">
                  <img src={contact1} alt="" className="contactImg" />
            </div>
           <div className="details ">
                  <h1 className="color">Krishna Chadha</h1>
                  <p>Chess Trainer </p>
                  <br />
                  <p>
                    I am available for Chess Traning. Connect with me via and
                    call in to my account.
                  </p>{" "}
                  <br />
                  <p>Phone: +91-9988718973</p>
                  <p>Email: Krishna.krish1391@gmail.com.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <button className="btn_shadow">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-instagram"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-twitter"></i>
                    </button>
                  </div>
                </div>
           </div>
           <div className="modal-text right">
             <span className="color">For Demo Please fill the detail</span>
             <h1>Demo </h1>
          <div>
            <span className="color">Name </span><input type="text" />

           <span className="color">Contact Number</span> <input type="text" />

           <span className="color">E-mail </span> <input type="text" />
           
          </div>
             <div className="button f_flex mtop">
              
               <button className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
               {/* <button className="btn_shadow">
                 VIEW PROJECT<i class="fas fa-chevron-right"></i>
               </button> */}
             </div>
             <button className="close-modal btn_shadow" onClick={toggleModal}>
               <i className="fas fa-times"></i>
             </button>
           </div>
         </div>
       </div>
      )}
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
