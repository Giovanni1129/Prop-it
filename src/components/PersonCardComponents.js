import React from 'react';

const PersonCardComponents = ({firstName, lastName,age,hairColor,idx,handleClick}) => {
    const style={
        border: "1px solid black"
    }
    return (
        <div style={style} className="card col-5 mx-auto">
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>hairColor: {hairColor}</p>
            <button className="btn btn-outline-primary btn-dark col-2 mx-auto"onClick={(e) => handleClick(e,idx)}>Birthday</button>
        </div>
    ); 
}

export default PersonCardComponents;

















// class PersonCardComponents extends Component {
//     render(){
//         return(
//             <div>
//                 <h2>{this.props.firstName},{this.props.lastname}</h2>
//                 <p>Age:{this.props.Age}</p>
//                 <p>Hair Color:{this.props.hairColor}</p>
//             </div>
//         );
//     }
// }
// export default PersonCardComponents;