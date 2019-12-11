import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';
import styled from 'styled-components';

// Here implementing facebook login for react
// https://github.com/keppelen/react-facebook-login added to project with
// yarn add react-facebook-login

const FBLogoutLocal = styled.div`
  background-color: lightblue;
  border-radius: 4px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Facebook = props => {
  //Idea with this component is get facebook data for user
  //Hold data in this component state
  //Use function from parent component to pass this user data
  //to be stored in the root app components state
  const [isLoggedIn, set_isLoggedIn] = useState(false);
  const [userID, set_userID] = useState('');
  const [name, set_name] = useState('');
  const [email, set_email] = useState('');
  const [picture, set_picture] = useState('');
  const [fbContent, set_fbContent] = useState(null);

  //Give asses to parents function through props
  const { personHandler } = props;

  //Once response recieve from facebook, this function is used
  //to set that data to this components local state
  const setFBUserToLocalState = res => {
    set_name(res.name);
    set_picture(res.picture.data.url);
    set_isLoggedIn(true);
    console.log('setFacebookUserToState in Facebook.js');
  };

  //Log out facebook within this local app
  const logOutFacebookLocalApp = () => {
    set_isLoggedIn(false);
    set_name('');
    set_picture('');
  };

  //receives facebook response, here setFBUserToLocalState is used
  //to save user info to this components local state
  const responseFacebook = response => {
    console.log('facebook response', response);
    console.log('userID', response.id);
    console.log('name', response.name);
    console.log('email', response.email);
    console.log('picture', response.picture.data.url);

    setFBUserToLocalState(response);
  };

  const componentClicked = () => console.log('clicked');

  useEffect(() => {
    if (isLoggedIn) {
      set_fbContent(
        <FBLogoutLocal onMouseDown={logOutFacebookLocalApp}>
          Local Facebook Logout
        </FBLogoutLocal>
      );
    } else {
      set_fbContent(
        <FacebookLogin
          appId="560198817874722"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />
      );
    }
  }, [isLoggedIn]);

  return (
    <div>
      <div>{fbContent}</div>
    </div>
  );
};

export default Facebook;
