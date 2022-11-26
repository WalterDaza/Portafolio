import { useEffect, useState } from 'react'
import './App.css'
import Contacto from './components/Contacto'
import Habilidades from './components/Habilidades'
import Home from './components/Home'
import Portafolio from './components/Portafolio'
import "./style/home.css"
import "./style/habilidades.css"
import AOS from "aos"
import "aos/dist/aos.css"
import hability from "./json/habilidades.json"
import portafolioFront from './json/portafolioFront.json'
import portafolioBack from './json/portafolioBack.json'
import "./style/portafolio.css"
import "./style/contacto.css"

function App() {

  const [MenuIsClose, setMenuIsClose] = useState(true)

  const handleOpenMenu = () => {
    setMenuIsClose(false)
  }

  const handleCloseMenu = () => {
    setMenuIsClose(true)
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])


  return (
    <div className="App">

      <header>
        <div className="menu_container">
          <a className='menu_title' href="#" >WalDaz</a>
          <nav className="menu__list">
            <a className="menu__link" href="#">Home</a>
            <a className="menu__link" href="#habilidades">Habilidades</a>
            <a className="menu__link" href="#portafolio">Portafolio</a>
            <a className="menu__link" href="#contacto">Contacto</a>
          </nav>
        </div>

        {/* Resposive  */}
        <div className='menu_resposive_container'>
          <a className='menu_resposive_title' href="#">WalDaz</a>
          <i onClick={handleOpenMenu} className="bx bx-menu menu_open"></i>
        </div>

        <div className={`menu__responsive_dropdown_container ${MenuIsClose && "action_menú"}`}>
          <div className='menu__responsive_dropdown'>
            <i onClick={handleCloseMenu} className={`bx bx-x menu__icon ${MenuIsClose && "action_close"} menu_close`}></i>
            <nav className="menu__responsive__list">
              <a onClick={handleCloseMenu} className={`menu__responsive__link ${MenuIsClose && "action_close"}`} href="#">Home</a>
              <a onClick={handleCloseMenu} className={`menu__responsive__link ${MenuIsClose && "action_close"}`} href="#habilidades">Habilidades</a>
              <a onClick={handleCloseMenu} className={`menu__responsive__link ${MenuIsClose && "action_close"}`} href="#portafolio">Portafolio</a>
              <a onClick={handleCloseMenu} className={`menu__responsive__link ${MenuIsClose && "action_close"}`} href="#contacto">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      <section className='section_home' >
        <Home />
      </section>

      <section id='habilidades' className='section_habilidades'>
        <Habilidades 
        hability={hability}
      />
      </section>

      <section id='portafolio' className='section_portafolio'>
        <Portafolio 
        portafolioFront={portafolioFront}
        portafolioBack={portafolioBack}
        />
      </section>

      <section id='contacto' className='section_contacto'>
        <Contacto />
      </section>
    </div>
  )
}

export default App
