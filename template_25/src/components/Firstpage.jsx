import React from "react";

const First =()=>{
    
  return(
   <> 
    <div className="footer group">
      <nav className="nav">
        <ul className="nav-list group">
          <li>
            <p className="nav-item-1">
              <a href="#">home</a>
            </p>
          </li>
          <li>
            <p className="nav-item-1-3">
              <a href="#">services</a>
            </p>
          </li>
          <li>
            <p className="nav-item-1-5">
              <a href="#">portfolio</a>
            </p>
          </li>
          <li>
            <p className="nav-item-1-7">
              <a href="#">contact</a>
            </p>
          </li>
        </ul>
      </nav>
      <p className="text">2013 ©</p>
    </div>
    <div className="contact group" id="cont">
      <div className="title">
        <p className="contact-2">Contact</p>
        <div className="title-deco-line" />
      </div>
      <div className="row-5 group">
        <div className="col-4">
          <div className="full-name">
            <p className="text-2">full name</p>
            
            <input className="input" type="text" name="" id="" />
          </div>
          <div className="email">
            <p className="email-2">email</p>
            <input className="input-2" type="text" name="" id=""  />
          </div>
        </div>
        <div className="col-5">
          <p className="text-3">
            Jujubes bear claw croissant wafer sweet lemon drops brownie chocolate
            bar. Sweet lollipop halvah tootsie roll cake fruitcake. Chocolate cake
            chocolate bar gingerbread lollipop tart. Jujubes bear claw donut chupa
            chups.
          </p>
          <p className="text-4">
            Linda Newman
            <br />
            W325 State Road 123
            <br />
            Mondovi, WI(Wisconsin) 98746-54321
            <br />
            (715) 946 - 1234
          </p>
        </div>
      </div>
      <div className="message group">
        <p className="message-2">message</p>
        <input className="textarea" type="text" name="" id=""  />
      </div>
      <div className="button"><a href="#">message</a></div>
    </div>
      
  </>  
)
}
export default First