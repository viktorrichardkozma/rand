import React, { Component } from 'react'
import mainLogo from './common/menulogo.svg'
import hamburgerIcon from './common/icon_menu_hamburger.svg'


export default class AppBar extends Component {
  render() {
    return (
      <div>
            <nav className="mobile-nav">
              <div className="dropdown_button">
                <img className="menu_button" src={hamburgerIcon}/>
              </div>
              <div className="drop-down-menu" id="drop-down">
                <ul>
                  <li>
                    <a href="/#aboutus">RÓLUNK</a>
                  </li>
                  <li>
                    <a href="/#details"> RÉSZLETEK </a>
                  </li>
                  <li>
                    <a href="/events"> GALÉRIA </a>
                  </li>
                  <li>
                    <a href="/#contact"> KAPCSOLAT </a>
                  </li>
                  <ul>
                  </ul></ul></div>
              <img style={{height: '15px', position: 'relative', top: '-2px', left: '17px'}} className="menu-logo" src="icons/menulogo.svg" />
            </nav>
            <div className="header-background-video">
              <video loop="loop" muted="true" autoPlay="autoplay" playsInline="playsinline">
                <source src="videos/header.mp4" type="video/mp4" />
                <source src="videos/header.webm" type="video/webm" />
              </video>
            </div>
            <div className="menu-logo-wrapper">
              <img className="menu-logo" src={mainLogo}/>
              <menu> 
                <ul>
                  <li>
                    <a href="/#aboutus">RÓLUNK</a>
                  </li>
                  <li>
                    <a href="/#details"> RÉSZLETEK </a>
                  </li>
                  <li>
                    <a href="/events"> GALÉRIA </a>
                  </li>
                  <li>
                    <a href="/#contact"> KAPCSOLAT </a>
                  </li>
                  <ul>
                  </ul></ul></menu>
            </div>
      </div>
    )
  }
}
