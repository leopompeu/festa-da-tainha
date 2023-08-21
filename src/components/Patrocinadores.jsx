import React, { useState, useRef, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import '../css/Patrocinadores.css'
import { logo, peixe, tainha } from '../assets'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link, json } from 'react-router-dom'

const Patrocinadores = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [thisTexto, setTexto] = useState("Clique em um patrocinador para saber mais sobre os serviços prestados por cada patrocinador.")
  const [thisTitulo, setTitulo] = useState("Navegue por nossos patrocinadores")
  const [thisImg, setImg] = useState(tainha)
  const [thisColor, setColor] = useState("#3C888300")
  const [thisButton, setButton] = useState("https://www.instagram.com/festadatainhapg/")
  const [thisAlt, setAlt] = useState("Logo marca da Festa da tainha")
  const [isShuffle, setShuffle] = useState(false)

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 510
  }

  const handleLeftClickMobile = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 340
  }

  const handleRightClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += 510;
  }  

  const handleRightClickMobile = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 340;
  }  

  const getJson = async () => {
    try {
      const response = await fetch('https://api.jsonbin.io/v3/b/649c592d8e4aa6225eb61000?meta=false/latest');
      const json = await response.json();
      setData(json.record);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getJson();
  }, []);
  
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, [])
  
  if(!loading){

  var patrocionadores = data

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    setShuffle(true)
    return array;

  }
  if(!isShuffle){
    shuffle(patrocionadores)
  }

  function setPatrocinador(id) {
      setTexto(patrocionadores[id].text);
      setTitulo(patrocionadores[id].name);
      setColor(patrocionadores[id].color);
      setImg(patrocionadores[id].image);
      setButton(patrocionadores[id].button);
      setAlt("Logo marca da empresa:" + ' ' + thisTitulo)
  }

  function setImagesSmall(row){
    switch(row){
      case 1:
        if(patrocionadores.length >= 3){
            return(
              <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[0].color}} onClick={() => {
                  setPatrocinador(0)
                  }}>
                  <img src={patrocionadores[0].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[1].color}} onClick={() => {
                  setPatrocinador(1)
                  }}>
                  <img src={patrocionadores[1].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[2].color}} onClick={() => {
                  setPatrocinador(2)
                  }}>
                  <img src={patrocionadores[2].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
            
        } else {
            switch(patrocionadores.length){
              case 1:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[0].color}} onClick={() => {
                      setPatrocinador(0)
                      }}>
                      <img src={patrocionadores[0].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
              case 2:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[0].color}} onClick={() => {
                      setPatrocinador(0)
                      }}>
                      <img src={patrocionadores[0].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[1].color}} onClick={() => {
                      setPatrocinador(1)
                      }}>
                      <img src={patrocionadores[1].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
            }
        }
      break;
      case 2:
        if(patrocionadores.length > 3){
          if(patrocionadores.length >= 6){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[3].color}} onClick={() => {
                  setPatrocinador(3)
                  }}>
                  <img src={patrocionadores[3].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[4].color}} onClick={() => {
                  setPatrocinador(4)
                  }}>
                  <img src={patrocionadores[4].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[5].color}} onClick={() => {
                  setPatrocinador(5)
                  }}>
                  <img src={patrocionadores[5].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
          } else {
            const newSize = patrocionadores.length - 3
            switch(newSize){
              case 1:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[3].color}} onClick={() => {
                      setPatrocinador(3)
                      }}>
                      <img src={patrocionadores[3].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
              case 2:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[3].color}} onClick={() => {
                      setPatrocinador(3)
                      }}>
                      <img src={patrocionadores[3].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[4].color}} onClick={() => {
                      setPatrocinador(4)
                      }}>
                      <img src={patrocionadores[4].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
            }
          }
        } else {
          return(null)
        }
      break;
      case 3:
        if(patrocionadores.length > 6){
          if(patrocionadores.length >= 9){
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[6].color}} onClick={() => {
                    setPatrocinador(6)
                    }}>
                    <img src={patrocionadores[6].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[7].color}} onClick={() => {
                    setPatrocinador(7)
                    }}>
                    <img src={patrocionadores[7].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[8].color}} onClick={() => {
                    setPatrocinador(8)
                    }}>
                    <img src={patrocionadores[8].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
          } else {
            const newSize = patrocionadores.length - 6
            switch(newSize){
              case 1:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[6].color}} onClick={() => {
                      setPatrocinador(6)
                      }}>
                      <img src={patrocionadores[6].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
              case 2:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[6].color}} onClick={() => {
                      setPatrocinador(6)
                      }}>
                      <img src={patrocionadores[6].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                    <div className={isMobile ? 'image-carrossel-mobilee' : 'image-carrossel'} style={{backgroundColor: patrocionadores[7].color}} onClick={() => {
                      setPatrocinador(7)
                      }}>
                      <img src={patrocionadores[7].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
            }
          }
        } else {
          return(null)
        }
      break;
      case 4:
        if(patrocionadores.length > 9){
          if(patrocionadores.length >= 12){
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[9].color}} onClick={() => {
                    setPatrocinador(9)
                    }}>
                    <img src={patrocionadores[9].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[10].color}} onClick={() => {
                    setPatrocinador(10)
                    }}>
                    <img src={patrocionadores[10].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[11].color}} onClick={() => {
                    setPatrocinador(11)
                    }}>
                    <img src={patrocionadores[11].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
          } else {
            const newSize = patrocionadores.length - 9
            switch(newSize){
              case 1:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[9].color}} onClick={() => {
                      setPatrocinador(9)
                      }}>
                      <img src={patrocionadores[9].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
              case 2:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[9].color}} onClick={() => {
                      setPatrocinador(9)
                      }}>
                      <img src={patrocionadores[9].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[10].color}} onClick={() => {
                      setPatrocinador(10)
                      }}>
                      <img src={patrocionadores[10].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
            }
          }
        } else {
          return(null)
        } 
      break;
      case 5:
        if(patrocionadores.length > 12){
          if(patrocionadores.length >= 15){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[12].color}} onClick={() => {
                  setPatrocinador(12)
                  }}>
                  <img src={patrocionadores[12].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[13].color}} onClick={() => {
                  setPatrocinador(13)
                  }}>
                  <img src={patrocionadores[13].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[14].color}} onClick={() => {
                  setPatrocinador(14)
                  }}>
                  <img src={patrocionadores[14].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
        } else {
          const newSize = patrocionadores.length - 12
          switch(newSize){
            case 1:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[12].color}} onClick={() => {
                    setPatrocinador(12)
                    }}>
                    <img src={patrocionadores[12].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
            case 2:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[12].color}} onClick={() => {
                    setPatrocinador(12)
                    }}>
                    <img src={patrocionadores[12].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[13].color}} onClick={() => {
                    setPatrocinador(13)
                    }}>
                    <img src={patrocionadores[13].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
          }
        }
        } else{
          return(null)
        }       
      break;
      case 6:
        if(patrocionadores.length > 15){
          if(patrocionadores.length >= 18){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[15].color}} onClick={() => {
                  setPatrocinador(15)
                  }}>
                  <img src={patrocionadores[15].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[16].color}} onClick={() => {
                  setPatrocinador(16)
                  }}>
                  <img src={patrocionadores[16].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[17].color}} onClick={() => {
                  setPatrocinador(17)
                  }}>
                  <img src={patrocionadores[17].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
        } else {
          const newSize = patrocionadores.length - 15
          switch(newSize){
            case 1:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[15].color}} onClick={() => {
                    setPatrocinador(15)
                    }}>
                    <img src={patrocionadores[15].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
            case 2:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[15].color}} onClick={() => {
                    setPatrocinador(15)
                    }}>
                    <img src={patrocionadores[15].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobilee' : 'image-carrossel'} style={{backgroundColor: patrocionadores[16].color}} onClick={() => {
                    setPatrocinador(16)
                    }}>
                    <img src={patrocionadores[16].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
          }
        } 
        } else {
          return(null)
        }         
      break;
      case 7:
        if(patrocionadores.length > 18){
          if(patrocionadores.length >= 21){
            return(          
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[18].color}} onClick={() => {
                  setPatrocinador(18)
                  }}>
                  <img src={patrocionadores[18].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[19].color}} onClick={() => {
                  setPatrocinador(19)
                  }}>
                  <img src={patrocionadores[19].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[20].color}} onClick={() => {
                  setPatrocinador(20)
                  }}>
                  <img src={patrocionadores[20].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
        } else {
          const newSize = patrocionadores.length - 18
          switch(newSize){
            case 1:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[18].color}} onClick={() => {
                    setPatrocinador(18)
                    }}>
                    <img src={patrocionadores[18].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
            case 2:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[18].color}} onClick={() => {
                    setPatrocinador(18)
                    }}>
                    <img src={patrocionadores[18].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobilee' : 'image-carrossel'} style={{backgroundColor: patrocionadores[19].color}} onClick={() => {
                    setPatrocinador(19)
                    }}>
                    <img src={patrocionadores[19].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
          }
        } 
        } else {
          return(null)
        }         
      break;
      case 8:
        if(patrocionadores.length > 21){
          if(patrocionadores.length >= 24){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[21].color}} onClick={() => {
                  setPatrocinador(21)
                  }}>
                  <img src={patrocionadores[21].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[22].color}} onClick={() => {
                  setPatrocinador(22)
                  }}>
                  <img src={patrocionadores[22].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[23].color}} onClick={() => {
                  setPatrocinador(23)
                  }}>
                  <img src={patrocionadores[23].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
        } else {
          const newSize = patrocionadores.length - 21
          switch(newSize){
            case 1:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[21].color}} onClick={() => {
                    setPatrocinador(21)
                    }}>
                    <img src={patrocionadores[21].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
            case 2:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[21].color}} onClick={() => {
                    setPatrocinador(21)
                    }}>
                    <img src={patrocionadores[21].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobilee' : 'image-carrossel'} style={{backgroundColor: patrocionadores[22].color}} onClick={() => {
                    setPatrocinador(22)
                    }}>
                    <img src={patrocionadores[22].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
          }
        } 
        } else {
          return(null)
        }         
      break;
      case 9:
        if(patrocionadores.length > 24){
          if(patrocionadores.length >= 27){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[24].color}} onClick={() => {
                  setPatrocinador(24)
                  }}>
                  <img src={patrocionadores[24].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[25].color}} onClick={() => {
                  setPatrocinador(25)
                  }}>
                  <img src={patrocionadores[25].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[26].color}} onClick={() => {
                  setPatrocinador(26)
                  }}>
                  <img src={patrocionadores[26].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
        } else {
          const newSize = patrocionadores.length - 24
          switch(newSize){
            case 1:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[24].color}} onClick={() => {
                    setPatrocinador(24)
                    }}>
                    <img src={patrocionadores[24].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
            case 2:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[24].color}} onClick={() => {
                    setPatrocinador(24)
                    }}>
                    <img src={patrocionadores[24].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobilee' : 'image-carrossel'} style={{backgroundColor: patrocionadores[25].color}} onClick={() => {
                    setPatrocinador(25)
                    }}>
                    <img src={patrocionadores[25].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
          }
        } 
        } else {
          return(null)
        }         
      break;
      case 10:
        if(patrocionadores.length > 27){
          if(patrocionadores.length >= 30){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[27].color}} onClick={() => {
                  setPatrocinador(27)
                  }}>
                  <img src={patrocionadores[27].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[28].color}} onClick={() => {
                  setPatrocinador(28)
                  }}>
                  <img src={patrocionadores[28].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[29].color}} onClick={() => {
                  setPatrocinador(29)
                  }}>
                  <img src={patrocionadores[29].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
        } else {
          const newSize = patrocionadores.length - 27
          switch(newSize){
            case 1:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[27].color}} onClick={() => {
                    setPatrocinador(27)
                    }}>
                    <img src={patrocionadores[27].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
            case 2:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[27].color}} onClick={() => {
                    setPatrocinador(27)
                    }}>
                    <img src={patrocionadores[27].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobilee' : 'image-carrossel'} style={{backgroundColor: patrocionadores[28].color}} onClick={() => {
                    setPatrocinador(28)
                    }}>
                    <img src={patrocionadores[28].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
          }
        } 
        } else {
          return(null)
        }         
      break;
      case 11:
        if(patrocionadores.length > 30){
          if(patrocionadores.length >= 33){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[30].color}} onClick={() => {
                  setPatrocinador(30)
                  }}>
                  <img src={patrocionadores[30].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[31].color}} onClick={() => {
                  setPatrocinador(31)
                  }}>
                  <img src={patrocionadores[31].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[32].color}} onClick={() => {
                  setPatrocinador(32)
                  }}>
                  <img src={patrocionadores[32].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
          } else {
            const newSize = patrocionadores.length - 30
            switch(newSize){
              case 1:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[30].color}} onClick={() => {
                      setPatrocinador(30)
                      }}>
                      <img src={patrocionadores[30].image} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
              case 2:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[30].color}} onClick={() => {
                      setPatrocinador(30)
                      }}>
                      <img src={patrocionadores[30].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[31].color}} onClick={() => {
                      setPatrocinador(31)
                      }}>
                      <img src={patrocionadores[31].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
            }
          }
        } else {
          return(null)
        }
      break;
      case 12:
        if(patrocionadores.length > 33){
          if(patrocionadores.length >= 36){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[33].color}} onClick={() => {
                  setPatrocinador(33)
                  }}>
                  <img src={patrocionadores[33].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[34].color}} onClick={() => {
                  setPatrocinador(34)
                  }}>
                  <img src={patrocionadores[34].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[35].color}} onClick={() => {
                  setPatrocinador(35)
                  }}>
                  <img src={patrocionadores[35].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
          } else {
            const newSize = patrocionadores.length - 33
            switch(newSize){
              case 1:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[33].color}} onClick={() => {
                      setPatrocinador(33)
                      }}>
                      <img src={patrocionadores[33].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
              case 2:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[33].color}} onClick={() => {
                      setPatrocinador(33)
                      }}>
                      <img src={patrocionadores[33].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[34].color}} onClick={() => {
                      setPatrocinador(34)
                      }}>
                      <img src={patrocionadores[34].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
            }
          }
        } else {
          return(null)
        }
      break;
      case 13:
        if(patrocionadores.length > 36){
          if(patrocionadores.length >= 39){
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[36].color}} onClick={() => {
                    setPatrocinador(36)
                    }}>
                    <img src={patrocionadores[36].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[37].color}} onClick={() => {
                    setPatrocinador(37)
                    }}>
                    <img src={patrocionadores[37].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[38].color}} onClick={() => {
                    setPatrocinador(38)
                    }}>
                    <img src={patrocionadores[38].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
          } else {
            const newSize = patrocionadores.length - 36
            switch(newSize){
              case 1:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[36].color}} onClick={() => {
                      setPatrocinador(36)
                      }}>
                      <img src={patrocionadores[36].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
              case 2:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[36].color}} onClick={() => {
                      setPatrocinador(36)
                      }}>
                      <img src={patrocionadores[36].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                    <div className={isMobile ? 'image-carrossel-mobilee' : 'image-carrossel'} style={{backgroundColor: patrocionadores[37].color}} onClick={() => {
                      setPatrocinador(37)
                      }}>
                      <img src={patrocionadores[37].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
            }
          }
        } else {
          return(null)
        }
      break;
      case 14:
        if(patrocionadores.length > 39){
          if(patrocionadores.length >= 42){
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[39].color}} onClick={() => {
                    setPatrocinador(39)
                    }}>
                    <img src={patrocionadores[39].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[40].color}} onClick={() => {
                    setPatrocinador(40)
                    }}>
                    <img src={patrocionadores[40].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[41].color}} onClick={() => {
                    setPatrocinador(41)
                    }}>
                    <img src={patrocionadores[41].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
          } else {
            const newSize = patrocionadores.length - 39
            switch(newSize){
              case 1:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[39].color}} onClick={() => {
                      setPatrocinador(39)
                      }}>
                      <img src={patrocionadores[39].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
              case 2:
                return(
                  <div className='row-patrocinadores'>
                    <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[39].color}} onClick={() => {
                      setPatrocinador(39)
                      }}>
                      <img src={patrocionadores[39].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                    <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[40].color}} onClick={() => {
                      setPatrocinador(40)
                      }}>
                      <img src={patrocionadores[40].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                    </div>
                  </div>
                )
              break;
            }
          }
        } else {
          return(null)
        } 
      break;
      case 15:
        if(patrocionadores.length > 42){
          if(patrocionadores.length >= 45){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[42].color}} onClick={() => {
                  setPatrocinador(42)
                  }}>
                  <img src={patrocionadores[42].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[43].color}} onClick={() => {
                  setPatrocinador(43)
                  }}>
                  <img src={patrocionadores[43].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[44].color}} onClick={() => {
                  setPatrocinador(44)
                  }}>
                  <img src={patrocionadores[44].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
        } else {
          const newSize = patrocionadores.length - 42
          switch(newSize){
            case 1:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[42].color}} onClick={() => {
                    setPatrocinador(42)
                    }}>
                    <img src={patrocionadores[42].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
            case 2:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[42].color}} onClick={() => {
                    setPatrocinador(42)
                    }}>
                    <img src={patrocionadores[42].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobilee' : 'image-carrossel'} style={{backgroundColor: patrocionadores[43].color}} onClick={() => {
                    setPatrocinador(43)
                    }}>
                    <img src={patrocionadores[43].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
          }
        }
        } else{
          return(null)
        }       
      break;
      case 16:
        if(patrocionadores.length > 45){
          if(patrocionadores.length >= 48){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[45].color}} onClick={() => {
                  setPatrocinador(45)
                  }}>
                  <img src={patrocionadores[45].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[46].color}} onClick={() => {
                  setPatrocinador(46)
                  }}>
                  <img src={patrocionadores[46].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[47].color}} onClick={() => {
                  setPatrocinador(47)
                  }}>
                  <img src={patrocionadores[47].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
        } else {
          const newSize = patrocionadores.length - 45
          switch(newSize){
            case 1:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[45].color}} onClick={() => {
                    setPatrocinador(45)
                    }}>
                    <img src={patrocionadores[45].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
            case 2:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[45].color}} onClick={() => {
                    setPatrocinador(45)
                    }}>
                    <img src={patrocionadores[45].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobilee' : 'image-carrossel'} style={{backgroundColor: patrocionadores[46].color}} onClick={() => {
                    setPatrocinador(46)
                    }}>
                    <img src={patrocionadores[46].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
          }
        } 
        } else {
          return(null)
        }         
      break;
      case 17:
        if(patrocionadores.length > 48){
          if(patrocionadores.length >= 51){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[48].color}} onClick={() => {
                  setPatrocinador(48)
                  }}>
                  <img src={patrocionadores[48].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[49].color}} onClick={() => {
                  setPatrocinador(49)
                  }}>
                  <img src={patrocionadores[49].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[50].color}} onClick={() => {
                  setPatrocinador(50)
                  }}>
                  <img src={patrocionadores[50].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
        } else {
          const newSize = patrocionadores.length - 48
          switch(newSize){
            case 1:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[48].color}} onClick={() => {
                    setPatrocinador(48)
                    }}>
                    <img src={patrocionadores[48].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
            case 2:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[48].color}} onClick={() => {
                    setPatrocinador(48)
                    }}>
                    <img src={patrocionadores[48].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobilee' : 'image-carrossel'} style={{backgroundColor: patrocionadores[49].color}} onClick={() => {
                    setPatrocinador(49)
                    }}>
                    <img src={patrocionadores[49].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
          }
        } 
        } else {
          return(null)
        }         
      break;
      case 18:
        if(patrocionadores.length > 51){
          if(patrocionadores.length >= 54){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[51].color}} onClick={() => {
                  setPatrocinador(51)
                  }}>
                  <img src={patrocionadores[51].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[52].color}} onClick={() => {
                  setPatrocinador(52)
                  }}>
                  <img src={patrocionadores[52].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[53].color}} onClick={() => {
                  setPatrocinador(53)
                  }}>
                  <img src={patrocionadores[53].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
        } else {
          const newSize = patrocionadores.length - 51
          switch(newSize){
            case 1:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[51].color}} onClick={() => {
                    setPatrocinador(51)
                    }}>
                    <img src={patrocionadores[51].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
            case 2:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[51].color}} onClick={() => {
                    setPatrocinador(51)
                    }}>
                    <img src={patrocionadores[51].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobilee' : 'image-carrossel'} style={{backgroundColor: patrocionadores[52].color}} onClick={() => {
                    setPatrocinador(52)
                    }}>
                    <img src={patrocionadores[52].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
          }
        } 
        } else {
          return(null)
        }         
      break;
      case 19:
        if(patrocionadores.length > 54){
          if(patrocionadores.length >= 57){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[54].color}} onClick={() => {
                  setPatrocinador(54)
                  }}>
                  <img src={patrocionadores[54].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[55].color}} onClick={() => {
                  setPatrocinador(55)
                  }}>
                  <img src={patrocionadores[55].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[56].color}} onClick={() => {
                  setPatrocinador(56)
                  }}>
                  <img src={patrocionadores[56].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
        } else {
          const newSize = patrocionadores.length - 54
          switch(newSize){
            case 1:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[54].color}} onClick={() => {
                    setPatrocinador(54)
                    }}>
                    <img src={patrocionadores[54].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
            case 2:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[54].color}} onClick={() => {
                    setPatrocinador(54)
                    }}>
                    <img src={patrocionadores[54].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobilee' : 'image-carrossel'} style={{backgroundColor: patrocionadores[55].color}} onClick={() => {
                    setPatrocinador(55)
                    }}>
                    <img src={patrocionadores[55].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
          }
        } 
        } else {
          return(null)
        }         
      break;
      case 20:
        if(patrocionadores.length > 57){
          if(patrocionadores.length >= 60){
            return(
              <div className='row-patrocinadores'>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[57].color}} onClick={() => {
                  setPatrocinador(57)
                  }}>
                  <img src={patrocionadores[57].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[58].color}} onClick={() => {
                  setPatrocinador(58)
                  }}>
                  <img src={patrocionadores[58].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
                <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} style={{backgroundColor: patrocionadores[59].color}} onClick={() => {
                  setPatrocinador(59)
                  }}>
                  <img src={patrocionadores[59].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                </div>
              </div>
            )
        } else {
          const newSize = patrocionadores.length - 57
          switch(newSize){
            case 1:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile' : 'image-carrossel'} alt={thisAlt} style={{backgroundColor: patrocionadores[57].color}} onClick={() => {
                    setPatrocinador(57)
                    }}>
                    <img src={patrocionadores[57].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
            case 2:
              return(
                <div className='row-patrocinadores'>
                  <div className={isMobile ? 'image-carrossel-mobile not-last-mobile' : 'image-carrossel not-last'} style={{backgroundColor: patrocionadores[57].color}} onClick={() => {
                    setPatrocinador(57)
                    }}>
                    <img src={patrocionadores[57].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                  <div className={isMobile ? 'image-carrossel-mobilee' : 'image-carrossel'} style={{backgroundColor: patrocionadores[58].color}} onClick={() => {
                    setPatrocinador(58)
                    }}>
                    <img src={patrocionadores[58].image} alt={thisAlt} className={isMobile ? 'png-carrosel-mobile' : 'png-carrosel'}/>
                  </div>
                </div>
              )
            break;
          }
        } 
        } else {
          return(null)
        }         
      break;
    }
    
  }
  
  if(isMobile){
    return(
      <div id='patrocinadores' data-aos="fade-up">
        <h2 className='title-patrocinadores-mobile'>Apoiadores</h2>
        <p className='text-patrocinadores-mobile'>Conheça as pessoas que fizeram com que a festa da tainha fosse realizada por sua vigésima quarta vez!</p>
        <div className='card-patrocinadores-mobile'>
          <div className='div-image-card-patrocinadores-mobile' style={{backgroundColor: thisColor}}>
            <img src={thisImg} className='image-card-patrocinadores-mobile' alt={thisAlt}/>
          </div>
          <h3 className='title-card-patrocinadores-mobile'>{thisTitulo}</h3>
          <p className='text-card-patrocinadores-mobile'>{thisTexto}</p>
          <Link className='button-card-patrocinador-mobile' target="_blank" to={thisButton} >Saiba mais</Link>
        </div>
          <div className='container-carousel-mobile'>
              <div className='carousel-patrocinadores-mobile' ref={carousel}>
                  <div className='carrossel-patrocinio-item-mobile'> 
                      <div className='row-patrocinadores'>
                        {setImagesSmall(1)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile'>
                        {setImagesSmall(2)}
                      </div>
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'> 
                      <div className='row-patrocinadores'>
                        {setImagesSmall(3)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile'>
                        {setImagesSmall(4)}
                      </div>
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(5)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(6)}
                      </div>        
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(7)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(8)}
                      </div>        
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(9)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(10)}
                      </div>        
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(11)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(12)}
                      </div>        
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(13)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(14)}
                      </div>        
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(15)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(16)}
                      </div>        
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(17)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(18)}
                      </div>        
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(19)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(20)}
                      </div>        
                  </div>
              </div>
              <div className='buttons'>
                  <button onClick={handleLeftClickMobile}><img src="/static/images/arrow.webp" alt="Proximo slide"/></button>
                  <button onClick={handleRightClickMobile}><img src="/static/images/arrow.webp" alt="Último slide"/></button>
              </div>
          </div>
      </div>
    )
  } else {
    return (
      <div className='patrocinadores' id='patrocinadores'  data-aos="fade-right">
        <div className='left-patrocinadores'>
          <h2 className='title-patrocinadores'>Apoiadores</h2>
          <p className='text-patrocinadores'>Conheça as pessoas que fizeram com que a festa da tainha fosse realizada por sua vigésima quarta vez!</p>
{/*           <CarrosselPatrocinadores thisImg={thisImg}/>
 */}        
          <div className='container-carousel'>
              <div className='carousel-patrocinadores' ref={carousel}>
                  <div className='carrossel-patrocinio-item'> 
                      <div className='row-patrocinadores'>
                        {setImagesSmall(1)}
                      </div>
                      <div className='row-patrocinadores second-row'>
                        {setImagesSmall(2)}
                      </div>
                  </div>
                  <div className='carrossel-patrocinio-item'> 
                      <div className='row-patrocinadores'>
                        {setImagesSmall(3)}
                      </div>
                      <div className='row-patrocinadores second-row'>
                        {setImagesSmall(4)}
                      </div>
                  </div>
                  <div className='carrossel-patrocinio-item'> 
                      <div className='row-patrocinadores'>
                        {setImagesSmall(5)}
                      </div>
                      <div className='row-patrocinadores second-row'>
                        {setImagesSmall(6)}
                      </div>
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(7)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(8)}
                      </div>        
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(9)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(10)}
                      </div>        
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(11)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(12)}
                      </div>        
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(13)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(14)}
                      </div>        
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(15)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(16)}
                      </div>        
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(17)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(18)}
                      </div>        
                  </div>
                  <div className='carrossel-patrocinio-item-mobile'>            
                      <div className='row-patrocinadores last-carousel-item-mobile'>
                        {setImagesSmall(19)}
                      </div>
                      <div className='row-patrocinadores second-row-mobile last-carousel-item'>
                        {setImagesSmall(20)}
                      </div>        
                  </div>
              </div>
              <div className='buttons'>
                  <button onClick={handleLeftClick}><img src="/static/images/arrow.webp" alt="Proximo slide"/></button>
                  <button onClick={handleRightClick}><img src="/static/images/arrow.webp" alt="Último slide"/></button>
              </div>
          </div>
        </div>
        <div className='card-patrocinadores'>
          <img src={peixe} alt='Peixe' className='peixe-patrocinadores'/>
          <div className='div-image-card-patrocinadores' style={{backgroundColor: thisColor}}>
            <img src={thisImg} alt={thisAlt} className='image-card-patrocinadores'/>
          </div>
          <h3 className='title-card-patrocinadores'>{thisTitulo}</h3>
          <p className='text-card-patrocinadores'>{thisTexto}</p>
          <Link className='button-card-patrocinador' target="_blank" to={thisButton} >Saiba mais!</Link>
        </div>
      </div>
    )
  }
}
}

export default Patrocinadores