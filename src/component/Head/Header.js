import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo.png"

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
          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
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
             <img src="" alt="img" />
           </div>
           <div className="modal-text right">
             <span>Featured - Design</span>
             <h1>Contact</h1>
             <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Cupiditate distinctio assumenda explicabo veniam temporibus
               eligendi.
             </p>
             <p>
               Consectetur adipisicing elit. Cupiditate distinctio assumenda.
               dolorum alias suscipit rerum maiores aliquam earum odit, nihil
               culpa quas iusto hic minus!
             </p>
             <div className="button f_flex mtop">
               <button className="btn_shadow">
                 LIKE THIS <i class="far fa-thumbs-up"></i>
               </button>
               <button className="btn_shadow">
                 VIEW PROJECT<i class="fas fa-chevron-right"></i>
               </button>
             </div>
             <button className="close-modal btn_shadow" onClick={toggleModal}>
               <i class="fas fa-times"></i>
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
