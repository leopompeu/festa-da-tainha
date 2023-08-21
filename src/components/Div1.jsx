import React from 'react'
import { isMobile } from 'react-device-detect'
import '../css/Div1.css'
import { logo, peixe, placeholderVideo, playbutton } from '../assets'
import { HashLink } from 'react-router-hash-link'
import ReactPlayer from 'react-player'

const Div1 = () => {

    if(isMobile){
        return (
            <section className='div-mobile'>
                <img src={logo} className='logo-div-mobile' alt="Logo da 24ª Festa da Tainha"/>
                <h1 className='text-mobile'>A 24ª edição da Festa da Tainha vem aí!</h1>
                <HashLink to="#festa" smooth className='button-div1-mobile'>Saiba mais</HashLink>
                <ReactPlayer
                        width="95%"
                        height="200px"
                        className='video-mobile'
                        alt="Video introdutório da festa da tainha"
                        url="https://www.youtube.com/watch?v=KXSdqycAjjA"
                        playIcon={<img className='playbutton-div1-mobile' alt="Botão de play" src={playbutton}></img>}
                        light={placeholderVideo}
                        playing={true}
                />  
            </section>
          )
    } else {
        return (
            <div className='div'>
                <div className='left'>
                    <img src={logo} className='logo-web' alt="Logo da 24ª Festa da Tainha"/>
                    <h1 className='text'>A 24ª edição da Festa da Tainha vem aí!</h1>
                    <HashLink to="#festa" smooth className='button-div1'>Saiba mais</HashLink>
                </div>
                <div className='right'>
                    <ReactPlayer
                        width="600px"
                        height="350px"
                        className='video-div1'
                        alt="Video introdutório da festa da tainha"
                        url="https://www.youtube.com/watch?v=KXSdqycAjjA"
                        playIcon={<img className='playbutton-div1' alt="Botão de play" src={playbutton}></img>}
                        light={placeholderVideo}
                        playing={true}
                    />   
                    <img src={peixe} alt='Peixe' className='peixe'></img>
                </div>
            </div>
        )
    }

}

export default Div1