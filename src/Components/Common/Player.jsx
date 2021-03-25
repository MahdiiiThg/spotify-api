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

export default function Player() {
  const token ='BQDr90YNo4L-XyG5Exwq_NWNTiKhgK8rze_RR1V2xCuyS1RRVT3AEY2DHfi0v0CA7DAEGUC8hATww2hNBE-jy0RIQT_D0Xnhdwhlpf25cQUQQXST9Wtxrr4IQFEUE6RpOq4vxd1Rs0uG10har-gpbV9IYGWABZNzqVQCtqr9lOtqMDFPi8bknTvlMhObQyY5iI_eJ0U0KmI3fIjIq0zSJty7tSQwV0pLNqdNMQaWn0xiGSfLZZN1X5DwpOjd7PSXQzRz57rfkCiuUeivIRZhvGWn_AQ_H6eg5fPYvoVc'
  const [track, setTrack] = useState(null)
  const id = '2takcwOaAZWiXQijPHIx7B'
  useEffect(() => {
    setTimeout(() => {
      getTrack()
    }, 1000);
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

  console.log('track track',track);
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
