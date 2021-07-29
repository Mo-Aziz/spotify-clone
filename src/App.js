 
import './App.css';
import React, { useEffect,useState } from 'react';
import Login from './pages/login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './pages/player/Player';



// setting a new instance of spotify Api helper.
const spotify = new SpotifyWebApi();

function App() {
  const[token, setToken]= useState(null);
  // getting the access token after login and run it in useEffect hook.
  useEffect(()=>{
      const hash = getTokenFromUrl();
      window.location.hash ="";
      const _token = hash.access_token;
      if(_token){
        setToken(_token);

        spotify.setAccessToken(_token);

        spotify.getMe().then((user)=>{
          console.log(">>>...>>>>>::", user);
        });
      }

      console.log("I have a token>>>", token)
  },[]);
  return (
    // BEM
    <div className="App">
       {token ?<Player/> : <Login/> }
       
    </div>
  );
}

export default App;
