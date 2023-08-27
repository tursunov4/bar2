import React from 'react'
import './yandex.css'
import { YMaps, Map, Placemark,ZoomControl  } from '@pbe/react-yandex-maps'

const Yandexmap = () => {
  return (
    <section className='yandexmap-section'>
     <YMaps  query={{apikey: 'ca60917c-ba3d-485a-8711-39fad57f4fe2'}}  >
        <Map  width="100%" height="100%" defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
            <ZoomControl/>
        </Map>
        
     </YMaps>
     
    </section>
  )
}

export default Yandexmap