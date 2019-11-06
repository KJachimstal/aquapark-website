import React, { Component } from 'react'
import HomeBackground from '../../assets/images/home-background.png'

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src={HomeBackground} className="img-fluid" alt=""/>
      </div>
    )
  }
}
