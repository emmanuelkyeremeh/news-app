import React from 'react'
import {Link} from "react-router-dom"
import NewsImg from "./Images/114363333-newspaper-vector-icon.jpg"
const Nav = () => {
   
    return (
        <nav>
            <div className="title">
               <img src={NewsImg} style={{width:"50px",height:"70px"}} alt=""/>
               <h1><Link className="link-title" to="/">Daily News</Link> </h1>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link className="link" to="/">Home </Link>
                    </li>
                    <li>
                        <Link className="link" to="/business">Business </Link>
                    </li>
                    <li>
                        <Link className="link" to="/sports">Sports</Link>
                    </li>
                    <li>
                        <Link className="link" to="/entertainment"> Entertainment </Link>
                    </li>
                </ul>
            </div>
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                <span></span>
                </label>

                <ul className="menu__box">
                    <div className="menu-flex">
                        <img src={NewsImg} style={{width:"50px",height:"70px"}} alt=""/>
                        <h1><Link className="link-title" to="/">Daily News</Link> </h1>
                    </div>
                    <li>
                        <Link className="menu__item" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="menu__item" to="/business">Business</Link>
                    </li>
                    <li>
                        <Link className="menu__item" to="/sports">Sports</Link>
                    </li>
                    <li>
                        <Link className="menu__item" to="/entertainment">Entertainment</Link>
                    </li>   
                </ul>
            </div>
        </nav>
    )
}

export default Nav
