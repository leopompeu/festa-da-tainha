import React, { useEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'
import '../css/Filantropia.css'
import ReactPlayer from 'react-player'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { adpg, apae, fundo, lar, ordem, playbutton } from '../assets';

const Filantropia = () => {

  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, [])

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= 720
  }

  const handleRightClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += 720;
  }

  const handleLeftClickMobile = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 315
  }

  const handleRightClickMobile = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += 315;
  }

  if(isMobile){
    return(
      <div id='filantropia' className='filantropia-div-mobile' data-aos="fade-up">
        <h2 className='title-filantropia-mobile'>Causas Sociais</h2>
        <p className='subtitle-filantropia-mobile'>
          Conheça as nossas causas! 
          Dezenas de projetos e entidades foram ajudados através dos anos de<br/>
          história da Festa da Tainha!
        </p>
        <div className='container-carousel-filantropia-mobile'>
          <div className='carousel-filantropia-mobile' ref={carousel}>
            <div className='carrossel-filantropia-item-mobile first-item-mobile'> 
              <ReactPlayer
                width="75vw"
                height="152.5px"
                alt="Video das instituições de causas sociais"
                className='video-filantropia-mobile'
                url="https://www.youtube.com/watch?v=AGjNteK_Zf4"
                playIcon={<img className='playbutton-mobile' src={playbutton} alt="Botão de play"></img>}
                light={apae}
                playing={true}
              />   
            </div>
            <div className='carrossel-filantropia-item-mobile'>
              <ReactPlayer
                width="75vw"
                height="152.5px"
                className='video-filantropia-mobile'
                alt="Video das instituições de causas sociais"
                url="https://www.youtube.com/watch?v=Odw3QQN4m5k"
                playIcon={<img className='playbutton-mobile' src={playbutton} alt="Botão de play"></img>}
                light={adpg}
                playing={true}
              /> 
            </div>
            <div className='carrossel-filantropia-item-mobile'>    
              <ReactPlayer
                width="75vw"
                height="152.5px"
                alt="Video das instituições de causas sociais"
                className='video-filantropia-mobile'
                url="https://www.youtube.com/watch?v=tIYlkkG4BHw"
                playIcon={<img className='playbutton-mobile' src={playbutton} alt="Botão de play"></img>}
                light={lar}
                playing={true}
              />       
            </div>
            <div className='carrossel-filantropia-item-mobile'>    
              <ReactPlayer
                width="75vw"
                height="152.5px"
                className='video-filantropia-mobile'
                alt="Video das instituições de causas sociais"
                url="https://www.youtube.com/watch?v=2P15OB7CX_Y"
                playIcon={<img className='playbutton-mobile' src={playbutton} alt="Botão de play"></img>}
                light={fundo}
                playing={true}
              />         
            </div>
            <div className='carrossel-filantropia-item-mobile'>    
              <ReactPlayer
                width="75vw"
                height="152.5px"
                alt="Video das instituições de causas sociais"
                className='video-filantropia-mobile'
                url="https://www.youtube.com/watch?v=ZZ7yUOXcfeU&t=105s"
                playIcon={<img className='playbutton-mobile' src={playbutton} alt="Botão de play"></img>}
                light={ordem}
                playing={true}
              />        
            </div>
          </div>
          <div className='buttons'>
              <button onClick={handleLeftClickMobile}><img src="/static/images/arrow.webp" alt="Proximo slide"/></button>
              <button onClick={handleRightClickMobile}><img src="/static/images/arrow.webp" alt="Último slide"/></button>
          </div>
        </div>
        <h3 className='title-content-filantropia-mobile'>Associações e entidades</h3>
        <p className='text-content-filantropia-mobile'>
          Através dos anos, dezenas de entidades foram ajudadas direta ou indiretamente. 
          Desde a cessão de espaços para venda de seus produtos durante o evento, 
          como ajuda e doação para seus projetos. A Festa da Tainha carrega consigo uma 
          linda história de filantropia e amor ao próximo.
        </p>
        <h3 className='title-content-filantropia-mobile'>Fundo Social de Solidariedade</h3>
        <p className='text-content-filantropia-mobile'>
          Além das entidades, parte da arrecadação do evento é direcionada 
          ao Fundo Social de Praia Grande, responsável por grande parte das 
          benemerências prestadas na cidade.
        </p>
      </div>
    )
  } else {
    return (
      <div className='container-filantropia' id='filantropia' data-aos="fade-up">
        <h2 className='title-filantropia'>Causas Sociais</h2>
        <p className='subtitle-filantropia'>
          Conheça as nossas causas! 
          Dezenas de projetos e entidades foram ajudados através dos anos de<br/>
          história da Festa da Tainha!
        </p>
        <div className='content-filantropia' >
          <div data-aos="fade-left">
            <h3 className='title-content-filantropia'>Associações e entidades</h3>
            <p className='text-content-filantropia'>
              Através dos anos, dezenas de entidades foram ajudadas direta ou indiretamente. 
              Desde a cessão de espaços para venda de seus produtos durante o evento, 
              como ajuda e doação para seus projetos. A Festa da Tainha carrega consigo uma 
              linda história de filantropia e amor ao próximo.
            </p>
            <h3 className='title-content-filantropia'>Fundo Social de Solidariedade</h3>
            <p className='text-content-filantropia'>
              Além das entidades, parte da arrecadação do evento é direcionada 
              ao Fundo Social de Praia Grande, responsável por grande parte das 
              benemerências prestadas na cidade.
            </p>
          </div>
          <div className='container-carousel-filantropia' data-aos="fade-right">
            <div className='carousel-filantropia' ref={carousel}>
              <div className='carrossel-filantropia-item first-item'> 
                <ReactPlayer
                  width="700px"
                  height="450px"
                  alt="Video das instituições de causas sociais"
                  className='video-filantropia'
                  url="https://www.youtube.com/watch?v=AGjNteK_Zf4"
                  playIcon={<img className='playbutton' src={playbutton} alt="Botão de play"></img>}
                  light={apae}
                  playing={true}
                />   
              </div>
              <div className='carrossel-filantropia-item'>
                <ReactPlayer
                  width="700px"
                  height="450px"
                  alt="Video das instituições de causas sociais"
                  className='video-filantropia'
                  url="https://www.youtube.com/watch?v=Odw3QQN4m5k"
                  playIcon={<img className='playbutton' src={playbutton} alt="Botão de play"></img>}
                  light={adpg}
                  playing={true}
                /> 
              </div>
              <div className='carrossel-filantropia-item'>    
                <ReactPlayer
                  width="700px"
                  height="450px"
                  alt="Video das instituições de causas sociais"
                  className='video-filantropia'
                  url="https://www.youtube.com/watch?v=tIYlkkG4BHw"
                  playIcon={<img className='playbutton' src={playbutton} alt="Botão de play"></img>}
                  light={lar}
                  playing={true}
                />       
              </div>
              <div className='carrossel-filantropia-item'>    
                <ReactPlayer
                  width="700px"
                  height="450px"
                  alt="Video das instituições de causas sociais"
                  className='video-filantropia'
                  url="https://www.youtube.com/watch?v=2P15OB7CX_Y"
                  playIcon={<img className='playbutton' src={playbutton}  alt="Botão de play"></img>}
                  light={fundo}
                  playing={true}
                />         
              </div>
              <div className='carrossel-filantropia-item'>    
                <ReactPlayer
                  width="700px"
                  height="450px"
                  alt="Video das instituições de causas sociais"
                  className='video-filantropia'
                  url="https://www.youtube.com/watch?v=ZZ7yUOXcfeU&t=105s"
                  playIcon={<img className='playbutton' src={playbutton} alt="Botão de play"></img>}
                  light={ordem}
                  playing={true}
                />        
              </div>
            </div>
            <div className='buttons'>
                <button onClick={handleLeftClick}><img src="/static/images/arrow.webp" alt="Proximo slide"/></button>
                <button onClick={handleRightClick}><img src="/static/images/arrow.webp" alt="Último slide"/></button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Filantropia