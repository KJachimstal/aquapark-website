import React, { Component } from 'react'
import aquapark1 from '../../assets/images/aquapark-1.jpg'

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src={aquapark1} className="img-fluid" alt=""/>
      </div>
    )
  }
}
