import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <div>
          Add New Listing
          <div className="btn-to-dash">
            <Link to='/'><button className='btn'>Cancel</button></Link>
          </div>
            <div>
                Property Name
                <br/>
                <input type="text" onChange={this.handleChange} value={this.state.name}  />
                <br/>
                Address
                <br/>
                <input type="text" onChange={this.handleChange} value={this.state.address} />
                <br/>
                City
                <br/>
                <input type="text" onChange={this.handleChange} value={this.state.city} />
                <br/>
                State
                <br/>
                <input type="text" onChange={this.handleChange} value={this.state.state} />
                <br/>
                Zip
                <br/>
                <input type="text" onChange={this.handleChange} value={this.state.zip} />
            </div>
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Complete" />
          </form>
        </div>
    )
  }
}
