import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PersonCardComponents from './components/PersonCardComponents';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      persons : [
        {
          firstName: "Paul",
          lastName: "Dybala",
          age: 24,
          hairColor: "Black"
        },
        {
          firstName: "Eden",
          lastName: "Hazard",
          age: 27,
          hairColor: "Brown"
        }
      ]
    }
    this.handelAgeClick = this.handelAgeClick.bind(this);
  }

  handelAgeClick(e,idx){
    e.preventDefault();
    this.setState(prevState => {
      return {
        age: prevState.persons[idx].age ++
      }
    })
  }

  render(){
    return (
      <div className="App">
        {
          this.state.persons.map((p,idx) => {
            return <PersonCardComponents 
                    firstName={p.firstName}
                    lastName={p.lastName}
                    age={p.age}
                    hairColor={p.hairColor}
                    key={idx}
                    idx={idx}
                    handleClick={this.handelAgeClick}
                    />
          })
        }
      </div>
    );
  }


}

export default App;



























// function App() {
//   return (
//     <div className="App">
//       <PersonCardComponents firstName="Isaac" lastname="Vega" Age={25} hairColor="black"/>
//       <PersonCardComponents firstName="Vincent" lastname="Pulsen" Age={25} hairColor="brown"/>
//       <PersonCardComponents firstName="Carlos" lastname="Vela" Age={30} hairColor="pink"/>
//       <PersonCardComponents firstName="Christian" lastname="Pulisic" Age={20} hairColor="red"/>
//     </div>
//   );
// }

// export default App;
