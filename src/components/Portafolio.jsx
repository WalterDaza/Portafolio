import React, { useEffect } from 'react'
import { useState } from 'react'
import "../../public/utils/pokeapi.png"
import AOS from "aos"

const Portafolio = ({portafolioFront, portafolioBack}) => {

  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, [])
  // console.log(portafolio)

  const [indexImgFront, setIndexImgFront] = useState(0)

  const handlePrevFront = () => {
    if(indexImgFront - 1 < 0){
      setIndexImgFront(portafolioFront.length - 1)
    } else {
      setIndexImgFront(indexImgFront - 1)
    }
  }

  const handleNextFront = () => {
    if(indexImgFront + 1 > portafolioFront.length - 1){
      setIndexImgFront(0)
    } else {
      setIndexImgFront(indexImgFront + 1)
    }
  }


  const [indexImgBack, setIndexImgBack] = useState(0)

  const handlePrevBack = () => {
    if(indexImgBack - 1 < 0){
      setIndexImgBack(portafolioBack.length - 1)
    } else {
      setIndexImgBack(indexImgBack - 1)
    }
  }

  const handleNextBack = () => {
    if(indexImgBack + 1 > portafolioBack.length - 1){
      setIndexImgBack(0)
    } else {
      setIndexImgBack(indexImgBack + 1)
    }
  }
  return (
    <div className='portafolio_container'>
      <h1 data-aos="fade-up" className='habilidades_title'>P O R T A F O L I O</h1>
      <h2  data-aos="fade-up" className='habilidades_subtitle'> F r o n t - e n d</h2>
      <div data-aos="fade-down-left" className='slider'>
        <button onClick={handlePrevFront} className='slider_prev'><i className='bx bxs-chevrons-left slider_icon'></i></button>     
        <div className='slider_static'>
          <div style={{transform: `translateX(calc(-${indexImgFront} / 4 * 100%))`}} className='slider_move'>
            {
              portafolioFront.map(url => (
                <div key={url.url} className='slider_img_container'>
                  <a href={url.url}><img className='slider_img' src={url.img}/></a>
                  <div className='slider_img_description' >
                    <h1 className='slider_img_title'>{url.name}</h1><p className='slider_img_parrafo'>{url.description}</p><a href={url.url}>
                    <i className='bx bx-show-alt img_icon' ></i></a></div>
                </div>
              ))
            }
  
          </div>
        </div>
      <button onClick={handleNextFront} className='slider_next'><i className='bx bxs-chevrons-right slider_icon'></i></button>
      </div>
      
      <h2 data-aos="fade-up" className='habilidades_subtitle'> B a c k - e n d</h2>
      
        <div data-aos="fade-down-right" className='slider'>
        <button  onClick={handlePrevBack} className='slider_prev'><i className='bx bxs-chevrons-left slider_icon'></i></button>     
        <div className='slider_static'>
          <div style={{transform: `translateX(calc(-${indexImgBack} / 4 * 100%))`}} className='slider_move'>
            {
              portafolioBack.map(url => (
                <div key={url.name} className='slider_img_container'>
                  <a href={url.url}><img className='slider_img' src={url.img}/></a>
                  <div className='slider_img_description' >
                    <h1 className='slider_img_title'>{url.name}</h1><p className='slider_img_parrafo'>{url.description}</p><a href={url.url}>
                    <i className='bx bx-show-alt img_icon' ></i></a></div>
                </div>
              ))
            }
  
          </div>
        </div>
      <button onClick={handleNextBack} className='slider_next'><i className='bx bxs-chevrons-right slider_icon'></i></button>
      </div>

      </div>
  )
}

export default Portafolio