import { useState } from 'react'
import { peixe } from '../assets'

import '../css/NavBar.css'

import { isMobile } from 'react-device-detect'
import { HashLink as Link } from 'react-router-hash-link'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false) 
  
  const [conheca, setConheca] = useState(false)
  const [patrocinadores, setPatrocinadores] = useState(false)
  const [local, setLocal] = useState(false)
  const [edicoes, setEdicoes] = useState(false)
  const [filantropia, setFilantropia] = useState(false)


  const changeValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if(scrollValue <= 600){
      setConheca(false)
    }
    if(scrollValue >= 600 && scrollValue <=1200){
      setConheca(true)
      setPatrocinadores(false)
    } 
    if(scrollValue >= 1200 && scrollValue <=2000){
      setPatrocinadores(true)
      setConheca(false)
      setLocal(false)
    }
    if(scrollValue >= 2000 && scrollValue <=3300){
      setLocal(true)
      setPatrocinadores(false)
      setEdicoes(false)
    }
    if(scrollValue >= 3300 && scrollValue <=4050){
      setEdicoes(true)
      setLocal(false)
      setFilantropia(false)
    }
    if(scrollValue >= 4050 && scrollValue <=4900){
      setFilantropia(true)
      setEdicoes(false)
    }

  }

  window.addEventListener('scroll', changeValueOnScroll)

  if(isMobile) {
    return (
      null
    )
  } else {
      return (
        <div className={`navbar bg`}>   
            <Link smooth to="#">
              <img src={peixe} alt="Festa da tainha" className="logo"/>
            </Link>
            <Link smooth to="#filantropia" className={`${filantropia ? "filantropia-selected" : "navbar-text"} last`}>
                Causas Sociais
            </Link>
            <Link smooth to="#edicoes" className={`${edicoes ? "edicoes-selected" : "navbar-text"} fourth`}>
                Última festa
            </Link>
            <Link smooth to="#local" className={`${local ? "local-selected" : "navbar-text"} third`}>
                Local
            </Link>
            <Link smooth to="#patrocinadores" className={`${patrocinadores ? "patrocinador-selected" : "navbar-text"} second`}>
                Patrocionadores
            </Link> 
            <Link smooth to="#festa" className={`${conheca ? "conheca-selected" : "navbar-text"} first`}>
                Conheça
            </Link>      
        </div>
      )
  }
}

export default NavBar