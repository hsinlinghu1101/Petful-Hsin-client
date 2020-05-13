import React, { Component } from 'react'
import './Pet.css'


export default class Pet extends Component {
    render() {
        if(this.props.pet === undefined){
            return <div className='pet'><h1>Not available</h1></div>
        }
        return (  
            <div className='pet'>
                <h1>Name: {this.props.pet.name}</h1>
                <img src={this.props.pet.imageURL} alt={this.props.pet.name}/>
                <p>Breed: {this.props.pet.breed}</p>
                <p>Gender: {this.props.pet.gender}</p>
                <p>Age: {this.props.pet.age}</p>
                <p>Description: {this.props.pet.description}</p>
                <p>Story: {this.props.pet.story}</p>
            </div>
        )
    }
}

