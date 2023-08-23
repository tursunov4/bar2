import React from 'react'
import './Modal.css'
const Modal = ({modal ,setModal ,children}) => {
    window.onclick = function(event) {
        if (event.target.id ==="modal") {
          setModal(false)
        }
      }
    if(modal){
        return (
          <div id='modal'  class="modal">
          <div class="modal-content">
            <span onClick={()=>setModal(false)} class="close">&times;</span>
            {
              children
             }
          </div>
        </div>
        )
    }
}

export default Modal