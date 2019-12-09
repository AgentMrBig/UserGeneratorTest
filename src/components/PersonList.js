import React, { useState, useEffect } from 'react';
import PersonCard from './PersonCard';

const PersonList = props => {
  //{loading ? <div>Loading...</div> : <PersonCard personName={person} />}
  return <PersonCard {...props} />;
};

export default PersonList;
