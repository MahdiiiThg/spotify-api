import React, {useEffect, useState} from 'react'
import './index.css';
import './App.css';
import Main from './Layout/Main';
import Header from './Components/Common/Header';
import Albums from './Containers/Albums';
import Player from './Components/Common/Player';
import Genres from './Containers/Genres';
import TopCharts from './Components/TopCharts';
import axios from 'axios';


function App() {
  const token ='BQDr90YNo4L-XyG5Exwq_NWNTiKhgK8rze_RR1V2xCuyS1RRVT3AEY2DHfi0v0CA7DAEGUC8hATww2hNBE-jy0RIQT_D0Xnhdwhlpf25cQUQQXST9Wtxrr4IQFEUE6RpOq4vxd1Rs0uG10har-gpbV9IYGWABZNzqVQCtqr9lOtqMDFPi8bknTvlMhObQyY5iI_eJ0U0KmI3fIjIq0zSJty7tSQwV0pLNqdNMQaWn0xiGSfLZZN1X5DwpOjd7PSXQzRz57rfkCiuUeivIRZhvGWn_AQ_H6eg5fPYvoVc'
  const [tracks, setTracks] = useState(null)
  const [genres,setGenres] = useState(null)
  const [releases, setReleases] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      latestReleases()
      genreSeeds()
      latestTracks()
    }, 1000);
  },[])

  const latestReleases = (search) => {
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/browse/new-releases',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`
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
        'Authorization': `Bearer ${token}`
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
        'Authorization': `Bearer ${token}`
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
        <Player />
      </div>
    </Main>
  );
}

export default App;
