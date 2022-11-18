import React from 'react'
import { useState } from 'react'
import "../utils/pokeapi.png"

const Portafolio = ({portafolio}) => {

  // console.log(portafolio)

  const [indexImg, setIndexImg] = useState(0)

  const handlePrev = () => {
    if(indexImg - 1 < 0){
      setIndexImg(portafolio.length - 1)
    } else {
      setIndexImg(indexImg - 1)
    }
  }

  const handleNext = () => {
    if(indexImg + 1 > portafolio.length - 1){
      setIndexImg(0)
    } else {
      setIndexImg(indexImg + 1)
    }
  }

  return (
    <div className='portafolio_container'>
      <h1 className='habilidades_title'>P o r t a f o l i o</h1>
      <div className='slider'>
        <button onClick={handlePrev} className='slider_prev'><i className='bx bxs-chevrons-left slider_icon'></i></button>     
        <div className='slider_static'>
          <div style={{transform: `translateX(calc(-${indexImg} / 4 * 100%))`}} className='slider_move'>
            {
              portafolio.map(url => (
                <>
                <div key={url.name} className='slider_img_container'>
                  <a href={url.url}><img className='slider_img' src={url.img}/></a>
                  <div className='slider_name' ><h1>{url.name}</h1><p>{url.description}</p><a href={url.url}><i className='bx bx-show-alt img_icon' ></i></a></div>
                </div>
                </>
              ))
            }
  
          </div>
        </div>
      <button onClick={handleNext} className='slider_next'><i className='bx bxs-chevrons-right slider_icon'></i></button>
      </div>
      <img src="./utils/pokeapi.png" alt="" />
      </div>
  )
}

export default Portafolio