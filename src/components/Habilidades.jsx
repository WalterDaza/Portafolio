import React, { useEffect } from 'react'
import AOS from "aos"

const Habilidades = ({hability}) => {

console.log(hability)

useEffect(() => {
  AOS.init({ duration: 2000 });
}, [])


  return (
    <div className='habilidades_container'>
      <h1  data-aos="fade-up" className='habilidades_title'>H a b i l i d a d e s</h1>
      <div className='icons_container'>
      {
        hability.map(hability => (
          <div  data-aos="zoom-in-down" className='icon_single' key={hability.name}>
            <i className={`bx bxl-${hability.img} ${hability.color} icon`}></i>
            <h1 className='icon_title'>{hability.name}</h1>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Habilidades
