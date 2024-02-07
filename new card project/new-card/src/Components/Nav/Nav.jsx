import React from 'react'
import "./Nav.css"
import data from '../utils/data'


function Nav({data}) {
    return (

        <nav>
            <h1 classname="brand-name">{data.login}</h1>
            <ul classname="links-container">
                <li classname="link"><a>Home</a></li>
                <li classname="link"><a>Contacts</a></li>
                <li classname="link"><a>About</a></li>
            </ul>
            <div classname="hamburger">
                <span classname="line">
                    <span classname="line">
                        <span classname="line">
                        </span></span></span></div>
        </nav>



    )
}

export default Nav