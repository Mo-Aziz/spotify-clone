 
import './App.css';
import React, { useEffect,useState } from 'react';
import Login from './pages/login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './pages/player/Player';
import { useDataLayerValue } from './stateProvider/DataLayer';



// setting a new instance of spotify Api helper.
const spotify = new SpotifyWebApi();

function App() {
const [{user, token}, dispatch]= useDataLayerValue();


  // getting the access token after login and run it in useEffect hook.
  useEffect(()=>{
      const hash = getTokenFromUrl();
      window.location.hash ="";
      const _token = hash.access_token;
      if(_token){
     dispatch({
       type:"SET_TOKEN",
       token:_token,
     })

        spotify.setAccessToken(_token);

        spotify.getMe().then((user)=>{
          console.log(">>>...>>>>>::", user);
          dispatch({
            type: "SET_USER",
            user:user,
          })
        });
        spotify.getUserPlaylists().then((playlists)=>{
          dispatch({
            type:"SET_PLAYLISTS",
            playlists:playlists,
          })
        })
      }

      
  },[]);


  return (
    // BEM
    <div className="App">
       {token ?<Player spotify={ spotify}/> : <Login/> }
       
    </div>
  );
}

export default App;
