import React from 'react'
import { isMobile } from 'react-device-detect'
import '../css/Footer.css'
import { fbIcon, footerLine, footerLineMobile, googleIcon, igIcon } from '../assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  if(isMobile){
    return(
      <div id='footer'>
        <img src={footerLineMobile} alt='Linha do footer com a logo da 24ª Festa da Tainha' className='line-footer-mobile'/>
        <div className='social-media-mobile'>
          <Link to='https://www.facebook.com/festadatainhapg' target='_blank' >
            <img src={fbIcon} className='img-social-media-mobile' alt='Botão para o Facebook'/>
          </Link>          
          <Link to='https://www.instagram.com/festadatainhapg/' target='_blank' >
            <img src={igIcon} className='img-social-media-mobile' alt='Botão para o Instagram'/>
          </Link>
          <Link to='https://www.google.com/search?client=opera-gx&q=festa+da+tainha&sourceid=opera&ie=UTF-8&oe=UTF-8' target='_blank' >
            <img src={googleIcon} className='last-img-mobile' alt='Botão para o Google'/>
          </Link>          
        </div>
        <Link  target='_blank' to='https://www.litteratech.com.br/'>
          <p className='littera-mobile'>
            Feito com 💜 por Littera
          </p>
        </Link>
      </div>
    )
  } else {
    return (
      <div className='container-footer' id='footer'>
        <img src={footerLine} className='line-footer' alt='Linha do footer com a logo da 24ª Festa da Tainha'/>
        <div className='social-media'>
          <Link to='https://www.facebook.com/festadatainhapg' target='_blank' className='img-social-media'>
            <img src={fbIcon} alt='Botão para o Facebook'/>
          </Link>
          <Link to='https://www.instagram.com/festadatainhapg/' target='_blank' className='img-social-media'>
            <img src={igIcon} alt='Botão para o Instagram'/>
          </Link>
          <Link to='https://www.google.com/search?client=opera-gx&q=festa+da+tainha&sourceid=opera&ie=UTF-8&oe=UTF-8' target='_blank' className='last-img'>
            <img src={googleIcon} alt='Botão para o Google'/>
          </Link>          
        </div>
        <Link  to='_blank' href='https://www.litteratech.com.br/'>
          <p className='littera'>
            Feito com 💜 por Littera
          </p>
        </Link>
      </div>
    )
  }
}

export default Footer