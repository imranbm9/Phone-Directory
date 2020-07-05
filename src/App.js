import React, { Component } from 'react';
import Header from './Header';
import './App.css'

class App extends Component {
  render() {
    let subscribers = [
      {
        id:1,
        name: "Imran",
        phoneNumber: "9844282428"
      },
      {
        id:2,
        name: "Shannu",
        phoneNumber: "7090882428"
      }
    ]
  return(
    <div className = "component-container" >
      <Header />
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {
          subscribers.map(sub => {
            return <div key = {sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phoneNumber}</span>
              <span className="custom-btn delete-btn">DELETE</span>
            </div>
          })
        }
      </div>
    </div>

  );
}
}

export default App;
