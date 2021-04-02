import React, {useEffect, useState} from 'react'

// axios
import axios from 'axios'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

export default function Player(props) {
  const [track, setTrack] = useState(null)
  const [token, setToken] = useState(null)

  const id = '2takcwOaAZWiXQijPHIx7B'
  
  useEffect(async () => {
    await setToken(props.data.token)
    setTimeout(async () => {
      getTrack(id)
    }, 3000);

  },[])

  const getTrack = (id) => {
    axios({
      method: 'get',
      url: `https://api.spotify.com/v1/tracks/${id}`,
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`
      },
    }).then(res => {
      setTrack(res.data)
      console.log('res');
    }).catch(err => {
      console.log('err',err);
    })
  }

  return (
    <div
      className="
        text-center
        bg-gray-700
        text-white
        p-5
        rounded-xl
        col-start-5
        col-end-7
        row-start-1
        row-end-3
      ">
      <h2>player</h2>
      { track &&
        <>
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          loop={true}
          autoplay= {true}
          delay= {5000}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            track.album.images.map((img, index) => 
              <SwiperSlide key={index} >
                <img style={{height:'220px', width: '100%'}} src={img.url} alt={img.url}/>
              </SwiperSlide>
            )
          }
          <h1>hi</h1>
        </Swiper>
        <audio controls>
          <source src={track.preview_url} type="audio/mpeg" />
        </audio>
        
        </>
    }
  </div>
  )
}
