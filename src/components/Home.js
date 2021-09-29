import React from "react";
import Jays from "../img/Jays.png"
import style from "./Home.module.css"
import Jays_Mobile from "../img/Jays_Mobile.png"




function Home() {
  return (
    <div className="container-fluid">
      <div className="row bg-light">
        <div className="col-12 col-md-6 mt-3 mx-4">
          <h1 className="fw-bold py-2 display-4">Jay's Jumble</h1>
          <div>
          <p>The most useful newsletter on Internet.</p>
          <p>Bringing you the best of what the internet has to offer, weekly in
            your inbox!📩</p>
          </div>

         <div className="py-0">
         <h4 className="fw-bold">What to Expect?</h4>
          <ul>
            <li>5 Tech Tools</li>
            <li>A Finance Tip</li>
            <li>A Productivity Hack</li>
            <li>Recommendations</li>
            <li>A question of the Week</li>
            <li>And the unexpected 😉</li>
          </ul>
         </div>

          <div className="form-group mb-4">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="form-control text-center w-50"
            />
          </div>

         <div className="gap-1">

         <button
            className="btn rounded-pill text-light w-50"
            style={{ backgroundColor: "black"}}
          >
            Subscribe
          </button>
        
          <div className="mt-1 ms-5">
         <a href="/" style={{color:"black"}}  className="mx-2">
              <i className="fab fa-twitter h2 " ></i>
            </a>
         <a href="/" style={{color:"black"}} className="mx-2">
              <i className="fab fa-youtube h2"></i>
            </a>
         <a href="/" style={{color:"black"}}  className="mx-2" >
              <i className="fab fa-facebook h2"></i>
            </a>
         </div>

         <button
            className="btn rounded-pill text-light mb-5 w-50"
            style={{ backgroundColor: "orange"}}
          >
            Read old Articles
          </button>
         </div>
         
        </div>
        <div className="col-12 col-md-1 "></div>
        <div className="col-12 col-md-4">
          <img src={Jays} alt="Jays" className={style.img}></img>
        </div>
        <div className="col-12">
          <img src={Jays_Mobile} alt="Jays" className={style.img_mobile}></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
