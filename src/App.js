import React, { useState, useEffect } from 'react';
import PersonList from './components/PersonList';
import styled from 'styled-components';
import './App.css';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
  font-family: 'Anton', sans-serif;
`;

const App = props => {
  const [person, setPerson] = useState(null);
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [debug, setDebug] = useState('msg');

  const personHandler = person => {
    setPerson(person);
  };

  const personsHandler = persons => {
    setPersons(persons);
  };

  useEffect(() => {
    //get user or users from randomMe api using randomMeAPI() function
    //optional string argument for number of users returned. Here we want
    //20 random users and we set state to hold these users

    //personsHandler(randomMeAPI('20'));
    personHandler(randomMeAPI());
  }, []);

  async function randomMeAPI(numUsers = '') {
    //====randomMeAPI====//
    /*takes optional number of users arg as string
    if number of users given, gets random number
    of users from api and returns users, if no number
    users arg is given, returns single user*/

    let response = null;
    let person = null;
    let persons = null;
    const baseUrl = 'https://randomuser.me/api/';

    if (numUsers === '') {
      response = await fetch(baseUrl);
      person = await response.json().then(person => {
        console.log('then response.json()', person.results[0]);
        setPerson(person.results[0]);
        setLoading(false);
      });
      //check if person is null, if not set loading false
      // if (person) {
      //   setLoading(false);
      //   console.log('person result', person.results[0]);
      // }
      // return person.results[0];
      return person;
    } else if (numUsers !== '') {
      response = await fetch(baseUrl + '?results=' + numUsers);
      persons = await response.json();
      //check if persons is null, if not set loading false
      if (persons) {
        setLoading(false);
        console.log('persons result', persons.results);
      }
      //return an array of users from the json response
      // by returning persons.results. Returning persons
      // would give you the full object received in the response.json()

      return persons.results;
    }
  }

  const stateTest = () => {
    console.log('current person state', person.gender);
  };

  return (
    <div className="App">
      <div className="user"></div>

      <header className="App-header">
        {loading ? <div>Loading...</div> : <PersonList person={person} />}

        <p>This is a random user</p>
        <button onClick={stateTest}>TEST STATE</button>
      </header>
    </div>
  );
};

export default App;
