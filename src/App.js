import React, {useEffect, useState} from 'react'
import './index.css';
import './App.css';

// Components
import Main from './Layout/Main';
import Header from './Components/Common/Header';
import Albums from './Containers/Albums';
import Player from './Components/Common/Player';
import Genres from './Containers/Genres';
import TopCharts from './Components/TopCharts';

// axios
import axios from 'axios';
import {initApp} from './redux/actions/initApp'
// redux
import {connect} from 'react-redux'

function App(props) {
  const [tracks, setTracks] = useState(null)
  const [genres,setGenres] = useState(null)
  const [releases, setReleases] = useState(null)

  useEffect(async () => {
    await props.initApp()
    
    setTimeout(() => {
      latestReleases()
      genreSeeds()
      latestTracks()
    }, 3000);

  },[])

  const latestReleases = (search) => {
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/browse/new-releases',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${props.token.token}`
      },
      params: {
        country: 'US',
        limit:7,
        offset:5
      }
    }).then(res => {
      setReleases(res.data)
    }).catch(err => {
      console.log('err',err);
    })
  }

  const genreSeeds = () => {
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/recommendations/available-genre-seeds',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${props.token.token}`
      },
      params: {
        country: 'US',
        limit:5,
        offset:5
      }
    }).then(res => {
      setGenres(res.data)
    }).catch(err => {
      console.log('err',err);
    })
  }

  const latestTracks = () => {
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/tracks',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${props.token.token}`
      },
      params: {
        ids: '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B',
      }
    }).then(res => {
      setTracks(res.data)
    }).catch(err => {
      console.log('err',err);
    })
  }

  const setchildData = (event) => {
    console.log('setchildData',event.target.id);
  }
  
  return (
    <Main>
      <Header />
      <div className="grid gap-4 grid-cols-6">
        <Albums setTrackId={setchildData} data={releases}/>
        <Genres data={genres}/>
        <TopCharts data={tracks} />
        <Player data={props.token} />
      </div>
    </Main>
  );
}

const mapStateToProps = (state) => ({
  token: state.initalApp
})

export default connect(mapStateToProps, { initApp })(App);
