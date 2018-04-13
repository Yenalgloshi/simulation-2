import React, { Component } from 'react';
import axios from 'axios';
import House from '../house/House';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      houseList: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/houseList${ this.props.match.params.class }`).then( results => {
      this.setState({
        houseList: results.data
      });
    });
  }

  render() {
    const houseList = this.state.houseList.map((house, i) => (
      <h3 key={i}>{ House }</h3>
    ))
    return (
        <div>
            Dashboard
          <div className="btn-to-wiz">
            <Link to='/wizard/Wizard'><button className='btn'>Add New Property</button></Link>
          </div>
            <House />
        </div>
    )
  }
}