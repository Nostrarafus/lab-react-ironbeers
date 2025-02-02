import React, { Component } from 'react'
import axios from 'axios';
import './RandomBeer.css'

export default class RandomBeer extends Component {
  constructor() {
    super()
    this.state = {}
  }


  getBeer = () => {
    axios.get(`http://localhost:5000/random`)
      .then(beer => {
        console.log(beer.data)
        const theBeer = beer.data;
        this.setState(theBeer);
      })
  }

  componentDidMount() {
    this.getBeer();
  }


  render() {

    return (
      <div>
        <div>
          <div>
            <h1> {this.state.name}</h1>
            <img className="randomBeerImg" src={this.state.image_url} alt={this.state.name} />
            <p>{this.state.tagline}</p>
          </div>
          <div style={{ width: '40%', float: "right" }}>

          </div>
        </div>
      </div>
    )
  }
}

