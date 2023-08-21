import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

import '../css/Festa.css'
import { bolinho, calendario, comidas, horarios, kids, peixe, pet, valor } from '../assets'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Festa = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, [])

  var texto = "Confira as datas da Festa da Tainha de Praia Grande deste ano de 2023! Em nossa 24ª Edição, teremos festa novamente em todas as sextas, sábados e domingos de julho, com exceção do primeiro dia de festa, que será no dia 30 de junho de 2023!"
  var titulo = "Calendário"

  const [thisTexto, setTexto] = useState(texto)
  const [thisTitulo, setTitulo] = useState(titulo)
  const [thisImg, setImg] = useState(calendario)
  const [isCalendario, setCalendario] = useState(true)

  const renderLink = () => {
    if(isCalendario){

      return(
        <p className={isMobile ? 'text-card-festa-mobile margin-mobile' : 'text-card-festa no-margin'}>
          <a href='https://www.instagram.com/p/CsMswJTg3-u/' target='_blank' className={isMobile ? 'link-festa-mobile' : 'link-festa'}>Clique aqui e saiba mais</a>
        </p>
      )
    } else {
      return(null)
    }
  }

  const setDiasTrue = () => {
    setTexto("Confira as datas da Festa da Tainha de Praia Grande deste ano de 2023! Em nossa 24ª Edição, teremos festa novamente em todas as sextas, sábados e domingos de julho, com exceção do primeiro dia de festa, que será no dia 30 de junho de 2023!")
    setTitulo("Calendário")
    setImg(calendario)
    setCalendario(true)
  }

  const setPetTrue = () => {
    setTexto("Temos um espaço reservado para você e seu pet aproveitarem o maior festival gastronômico do litoral paulista!")
    setTitulo("Espaço Pet")
    setImg(pet)
    setCalendario(false)
  }

  const setValoresTrue = () => {
    setTexto("Devido a temporada de pesca de tainha ainda não ter se iniciado, ainda não definimos os valores! Prezamos sempre pelos peixes mais frescos e graúdos, por isso da demora nas negociações! Mas fiquem ligados nas atualizações em nossas redes sociais!")
    setTitulo("Valores")
    setImg(valor)
    setCalendario(false)
  }

  const setAlimentosTrue = () => {
    setTexto("Nem só de tainha vive a festa! Neste ano, contaremos com vinhos, refrigerantes, sucos, cervejas, doces, salgados fritos e assados, sorvetes, batata frita e muito mais! A entrada será franca, como sempre!")
    setTitulo("Cardápio")
    setImg(comidas)
    setCalendario(false)
  }

  const setHorariosTrue = () => {
    setTexto("Atente-se aos horários da 24ª Festa da Tainha de Praia Grande!\nSextas-feiras: das 18:00 às 23:00;\nSábados: das 12:00 às 23:00;\nDomingos: das 12:00 das 17:00.")
    setTitulo("Horários")
    setImg(horarios)
    setCalendario(false)
  }

  const setKidsTrue = () => {
    setTexto("A criançada tem espaço reservado na 24ª Festa da Tainha de Praia Grande! Com brinquedos e atrações de todos os tipos para divertir todas as idades!")
    setTitulo("Espaço Kids")
    setImg(kids)
    setCalendario(false)
  }

  const setBolinhoTrue = () => {
    setTexto("A porção de 360g e com 12 bolinhos, sairá por R$28,00. Uma boa opção para experimentar durante o evento! Produto Artesanal!\nINGREDIENTES:\nBatata, farinha de pão, ovos, pimenta do reino, sal, carne de tainha assada e salsa.")
    setTitulo("Bolinho de Tainha")
    setImg(bolinho)
    setCalendario(false)
  }

  if(isMobile){
    return(
      <div id='festa' data-aos="fade-up">
         <h2 className='title-festa-mobile'>Conheça a festa</h2>
          <p className='text-festa-mobile'>Confira abaixo a programação e traga a sua família para saborear uma deliciosa tainha servida na telha.</p>
        <div className='card-festa-mobile'>
            <img src={peixe} alt='Peixe' className='peixe-festa-mobile'/>
            <img src={thisImg} className='img-festa-mobile' alt={thisTitulo}/>
            <h3 className='title-card-festa-mobile'>{thisTitulo}</h3>
            <p className='text-card-festa-mobile'>{thisTexto}</p>
            {renderLink()}
          </div>
        <div>
          <div className='flex-festa'>
              <button className='button-festa-mobile' onClick={setDiasTrue}>Dias de evento</button>
              <button className='button-festa-mobile' onClick={setPetTrue}>Espaço Pet</button>
          </div>
          <div className='flex-festa'>
              <button className='button-festa-mobile' onClick={setAlimentosTrue}>Alimentos</button>
              <button className='button-festa-mobile' onClick={setHorariosTrue}>Horários</button>
          </div>
          <div className='flex-festa'>
            <button className='button-festa-mobile' onClick={setValoresTrue}>Valores</button>
            <button className='button-festa-mobile' onClick={setKidsTrue}>Espaço Kids</button>
          </div>
          <div className='flex-festa'>
            <button className='button-festa-mobile' onClick={setBolinhoTrue}>Bolinho de Tainha</button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='container-festa' id='festa' data-aos={window.innerWidth < 1350 ? 'fade-down' : 'fade-left'} >
        <div className='card-festa'>
          <img src={peixe} alt='Peixe' className='peixe-festa'/>
          <img src={thisImg} className='img-festa' alt={thisTitulo}/>
          <h3 className='title-card-festa'>{thisTitulo}</h3>
          <p className='text-card-festa'>{thisTexto}</p>
          {renderLink()}
        </div>
        <div className='right-festa'>
          <h2 className='title-festa'>Conheça a festa</h2>
          <p className='text-festa'>Confira abaixo a programação e traga a sua família para saborear uma deliciosa tainha servida na telha.</p>
          <div className='div-buttons-festa'>
            <div className='flex-festa'>
              <button className='button-festa' onClick={setDiasTrue}>Dias de evento</button>
              <button className='button-festa' onClick={setPetTrue}>Espaço Pet</button>
              <button className='button-festa' onClick={setValoresTrue}>Valores</button>
            </div>
            <div className='flex-festa'>
              <button className='button-festa' onClick={setAlimentosTrue}>Alimentos</button>
              <button className='button-festa' onClick={setHorariosTrue}>Horários</button>
              <button className='button-festa' onClick={setKidsTrue}>Espaço Kids</button>
            </div>
            <div className='flex-festa-lonely'>
              <button className='button-festa-lonely' onClick={setBolinhoTrue}>Bolinho</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Festa