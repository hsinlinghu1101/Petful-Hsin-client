import React, { Component } from 'react'
import './Pet.css'


export default class Pet extends Component {
    render() {
        if(this.props.pet === undefined){
            return <div className='pet'><h1>Not available</h1></div>
        }
        return (  
            <div className='pet'>
                <img src={this.props.pet.imageURL} alt={this.props.pet.name}/>
                <div className="intro">
                <h3>Name: {this.props.pet.name}</h3>
                <p><b>Breed:</b> {this.props.pet.breed}</p>
                <p><b>Gender:</b> {this.props.pet.gender}</p>
                <p><b>Age:</b> {this.props.pet.age}</p>
                <p><b>Description:</b> {this.props.pet.description}</p>
                <p><b>Story:</b> {this.props.pet.story}</p>
                </div>
            </div>
        )
    }
}

