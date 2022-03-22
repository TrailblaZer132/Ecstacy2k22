import React, { Component } from 'react'
import './Hero.css'
export class Hero extends Component {
  render() {
    return (
      <>
      <div className="hero-bg">
        
      </div>
      <div className="hero-img">
         <img src="../img/ecstasy.png" className='d-block logo-img'  alt="" /> 
         This is an image
         </div>
      </>
    )
  }
}

export default Hero