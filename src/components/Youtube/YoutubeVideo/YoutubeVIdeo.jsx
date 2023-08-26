import React, { useState } from 'react'
import "./style.css"
import YoutubeModaltext from "../YoutubevideoModal/YoutubevideoModal"
import Modal from '../../Modal/Modal'
const YoutubeVIdeo = () => {
   const [modal , setModal] = useState(false)

  return (
    <div className='youtubevideo-wrapper'>
      <Modal modal={modal} setModal={setModal}>
         <YoutubeModaltext/>
      </Modal>
     <div className="youtubevideo-wrapper__text">
      <h4>Все этапы приготовления пива в одном аппарате!</h4>
      <ul className="youtube-video__text-list">
        <li className='youtube-video__text-listitem'>
           <h5>1. Затирание</h5>
           <p>Запрограммируйте пивоварню на конкретный рецепт или выберете ручной режим, засыпьте дроблёный солод, запустите процесс.</p>
        </li>
        <li className='youtube-video__text-listitem'>
           <h5>2. Фильтрация</h5>
           <p>Извлеките заторный бак и поставьте устройство на подставку. Промываем дробину водой, заранее нагретой до 80–90°.</p>
        </li>
        <li className='youtube-video__text-listitem'>
           <h5>3. Варка</h5>
           <p>Добавьте хмель для горечи в самом начале варки. Добавьте хмель для вкуса, когда прошло ¾ всего процесса. Добавьте хмель для аромата за 5–7 минут до конца варки.</p>
        </li>
        <li className='youtube-video__text-listitem'>
           <h5>4. Охлаждение</h5>
           <p>Запрограммируйте пивоварню на конкретный рецепт или выберете ручной режим, засыпьте дроблёный солод, запустите процесс.</p>
        </li>
      </ul>
      <div className="youtubevideo__mashina">
       <img src="" alt="" />
               
      </div>
      <div onClick={()=>setModal(true)} className='youtubevideo__mashina-text'>Подробнее об этапах приготовления</div>
     </div>
     <div className="youtubevide-wrapper__videos">
      <div className='youtubevideo-wrapper__video' >
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5eBBdBEbbXQ?si=lwIgRVcNZcWQl-VX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className='youtubevideo-wrapper__video'></div>
     </div>
     
    </div>
  )
}

export default YoutubeVIdeo