import React, { Component } from 'react';


class PersonCardComponents extends Component {
    render(){
        return(
            <div>
                <h2>{this.props.firstName},{this.props.lastname}</h2>
                <p>Age:{this.props.Age}</p>
                <p>Hair Color:{this.props.hairColor}</p>
            </div>
        );
    }
}
export default PersonCardComponents;