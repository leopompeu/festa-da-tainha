import React, { useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import '../css/Local.css'
import { line, lineH, map } from '../assets'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Local = () => {

  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, [])


  if(isMobile){
    return(
      <div id='local' data-aos="fade-up">
        <h2 className='title-local-mobile'>Local do evento</h2>
        <p className='text-local-mobile'>Pavilhão de Eventos Jair Rodrigues<br/>
        Rua Savério Fittipaldi - Quietude, Praia Grande - SP, CEP 11718-180
        </p>
        <img src={map} className='map-mobile' alt='Mapa com o local da 24ª Festa da Tainha'/>
        <Link className='button-local-mobile' target="_blank" to='https://www.google.com.br/maps/dir//Festa+da+Tainha+em+Praia+Grande+-+Rua+Savério+Fittipaldi+-+Quietude,+Praia+Grande+-+SP/@-24.017638,-46.5160436,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94ce1fa5ca5f1145:0x838f3883054f046e!2m2!1d-46.4747579!2d-24.0176435!3e0?entry=ttu' >Veja a rota!</Link>
        <div data-aos="fade-left">
          <h3 className='title-infos-mobile'>Horários</h3>
          <p className='text-horario-mobile' >
            <span className='bold'>Sexta-feira</span> das 19h às 23h<br/><br/>
            <span className='bold'>Sábado</span> das 12h às 23h<br/><br/>
            <span className='bold'>Domingo</span> das 12h às 17h<br/>
          </p>
        </div>
        <img src={lineH} className='line-local-mobile' alt='Divisória'/>
        <div data-aos="fade-right">
          <h3 className='title-infos-mobile'>Datas</h3>
            <p className='text-datas-mobile'>
            <span className='bold'>Dia em Junho</span><br/>
            30<br/><br/>
            <span className='bold'>Dias em Julho</span><br/>
            01,02,07,08,09,14,15,16,21,22,23,<br/>
            28,29 e 30</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className='container-local' id='local' data-aos="fade-up">
        <h2 className='title-local'>Local do evento</h2>
        <p className='text-local'>Pavilhão de Eventos Jair Rodrigues<br/>
        Rua Savério Fittipaldi - Quietude, Praia Grande - SP, CEP 11718-180
        </p>
        <img src={map} className='map' alt='Mapa com o local da 24ª Festa da Tainha'/>
        <Link className='button-local' target="_blank" to='https://www.google.com.br/maps/dir//Festa+da+Tainha+em+Praia+Grande+-+Rua+Savério+Fittipaldi+-+Quietude,+Praia+Grande+-+SP/@-24.017638,-46.5160436,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94ce1fa5ca5f1145:0x838f3883054f046e!2m2!1d-46.4747579!2d-24.0176435!3e0?entry=ttu' >Veja a rota!</Link>
        <div className='container-infos'>
          <div className='div-infos' data-aos="fade-right">
            <h3 className='title-infos'>Horários</h3>
            <p className='text-horario'>
              <span className='bold'>Sexta-feira</span> das 19h às 23h<br/><br/>
              <span className='bold'>Sábado</span> das 12h às 23h<br/><br/>
              <span className='bold'>Domingo</span> das 12h às 17h<br/>
            </p>
          </div>
          <img src={line} data-aos="fade-down" className='line-local' alt='Divisória'/>
          <div className='div-infos-second' data-aos="fade-left">
            <h3 className='title-infos title-data'>Datas</h3>
            <p className='text-datas'>
              <span className='bold'>Dia em Junho</span><br/>
              30<br/><br/>
              <span className='bold'>Dias em Julho</span><br/>
              01,02,07,08,09,14,15,16,21,22,23,<br/>
              28,29 e 30</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Local