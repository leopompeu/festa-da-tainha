import React, { useEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'
import '../css/Edicoes.css'
import { placeholderEdicoes } from '../assets'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Edicoes = () => {

  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, [])

  const carousel = useRef(null);

/*   const handleLeftClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= 1180
  }

  const handleRightClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += 1180;
  }

  const handleLeftClickMobile = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 335
}

const handleRightClickMobile = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 335;
} */

  if(isMobile){
    return(
      <div id='edicoes' data-aos="fade-up">
        <h2 className='title-edicoes-mobile'>Última festa</h2>
        <div className='container-carousel-edicao-mobile'>
          <div className='carousel-edicao-mobile' ref={carousel}>
            <div className='carrossel-edicao-item-mobile first-item-mobile'> 
              <img src={placeholderEdicoes} className='img-edicao-mobile' alt="Imagens da edição anterior da Festa da Tainha"/>
              <h3 className='title-edicoes-ano-mobile'>2022</h3>
              <p className='text-edicoes-ano-mobile'>
                Com mais de 17 toneladas de tainha vendidas, 
                a 23ª Festa da Tainha realizada em 2022 foi um sucesso! 
                Com a retomada pós-pandemia, todas as entidades voltaram a serem ajudadas e o 
                projeto voltou com toda a força! Foram 5 finais de semana de reencontros e 
                novas amizades!
              </p>
            </div>
{/*             <div className='carrossel-edicao-item-mobile'> 
              <img src={placeholderEdicoes} className='img-edicao-mobile'/>
              <h1 className='title-edicoes-ano-mobile'>2022</h1>
              <p className='text-edicoes-ano-mobile'>
                Com mais de 17 toneladas de tainha vendidas, 
                a 23ª Festa da Tainha realizada em 2022 foi um sucesso! 
                Com a retomada pós-pandemia, todas as entidades voltaram a serem ajudadas e o 
                projeto voltou com toda a força! Foram 5 finais de semana de reencontros e 
                novas amizades!
              </p>
            </div>
            <div className='carrossel-edicao-item-mobile'>            
              <img src={placeholderEdicoes} className='img-edicao-mobile'/>
              <h1 className='title-edicoes-ano-mobile'>2022</h1>
              <p className='text-edicoes-ano-mobile'>
                Com mais de 17 toneladas de tainha vendidas, 
                a 23ª Festa da Tainha realizada em 2022 foi um sucesso! 
                Com a retomada pós-pandemia, todas as entidades voltaram a serem ajudadas e o 
                projeto voltou com toda a força! Foram 5 finais de semana de reencontros e 
                novas amizades!
              </p>
            </div> */}
          </div>
{/*           <div className='buttons'>
              <button onClick={handleLeftClickMobile}><img src="/static/images/arrow.webp" alt="Proximo slide"/></button>
              <button onClick={handleRightClickMobile}><img src="/static/images/arrow.webp" alt="Último slide"/></button>
          </div> */}
        </div>
      </div>
    )
  } else {
    return (
      <div className='container-edicoes' id='edicoes' data-aos={window.innerWidth < 1350 ? 'fade-down' : 'fade-left'}>
        <h2 className='title-edicoes'>Última festa</h2>
        <div className='container-carousel-edicao'>
              <div className='carousel-edicao' ref={carousel}>
                  <div className='carrossel-edicao-item'> 
                    <div className='div-ano'>
                      <img src={placeholderEdicoes} className='img-edicao' alt="Imagens da edição anterior da Festa da Tainha"/>
                      <div className='content-ano'>
                        <h3 className='title-edicoes-ano' data-val="2022">2022</h3>
                        <p className='text-edicoes-ano'>
                        Com mais de 17 toneladas de tainha vendidas, 
                        a 23ª Festa da Tainha realizada em 2022 foi um sucesso! 
                        Com a retomada pós-pandemia, todas as entidades voltaram a serem ajudadas e o 
                        projeto voltou com toda a força! Foram 5 finais de semana de reencontros e 
                        novas amizades!
                        </p>
                      </div>
                    </div>
                  </div>
{/*                   <div className='carrossel-edicao-item'> 
                    <div className='div-ano'>
                      <img src={placeholderEdicoes} className='img-edicao'/>
                      <div className='content-ano'>
                        <h1 className='title-edicoes-ano'>2022</h1>
                        <p className='text-edicoes-ano'>
                        Com mais de 17 toneladas de tainha vendidas, 
                        a 23ª Festa da Tainha realizada em 2022 foi um sucesso! 
                        Com a retomada pós-pandemia, todas as entidades voltaram a serem ajudadas e o 
                        projeto voltou com toda a força! Foram 5 finais de semana de reencontros e 
                        novas amizades!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='carrossel-edicao-item'>            
                    <div className='div-ano'>
                      <img src={placeholderEdicoes} className='img-edicao'/>
                      <div className='content-ano'>
                        <h1 className='title-edicoes-ano'>2022</h1>
                        <p className='text-edicoes-ano'>
                        Com mais de 17 toneladas de tainha vendidas, 
                        a 23ª Festa da Tainha realizada em 2022 foi um sucesso! 
                        Com a retomada pós-pandemia, todas as entidades voltaram a serem ajudadas e o 
                        projeto voltou com toda a força! Foram 5 finais de semana de reencontros e 
                        novas amizades!
                        </p>
                      </div>
                    </div>
                  </div> */}
              </div>
{/*               <div className='buttons'>
                  <button onClick={handleLeftClick}><img src="/static/images/arrow.webp" alt="Proximo slide"/></button>
                  <button onClick={handleRightClick}><img src="/static/images/arrow.webp" alt="Último slide"/></button>
              </div> */}
          </div>
      </div>
    )
  }
  
}

export default Edicoes