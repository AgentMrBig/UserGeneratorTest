import React from 'react';

import Axios from 'axios';
import PersonList from './components/PersonList';
import './App.css';

function App() {
  const getData = () => {
    Axios.get(`https://randomuser.me/api/`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log('Error fetching users from api', err);
      });
  };

  return (
    <div className="App">
      <div className="user"></div>

      <header className="App-header">
        <PersonList />
        <p>You can create a new user</p>
        <button type="button">Create User</button>
      </header>
    </div>
  );
}

export default App;
