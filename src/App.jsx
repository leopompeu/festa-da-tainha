import './App.css'
import styles from './style'
import { Div1, Edicoes, Festa, Filantropia, Footer, Local, NavBar, Patrocinadores } from './components'
import { isMobile } from 'react-device-detect'
import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4';

ReactGA.initialize('G-WM3WG55552');


const App = () => {
  ReactGA.initialize('G-WM3WG55552');

    if(isMobile){
      document.documentElement.style.setProperty('background-image', `url('./static/images/bgMobile2.webp')`)
    }
    if(window.innerWidth >= 1330 && !isMobile){
      document.documentElement.style.setProperty('background-image', `url('./static/images/bg1920.webp')`)
    }
    if(window.innerWidth > 2000  && !isMobile){
      document.documentElement.style.setProperty('background-image', `url('./static/images/bgBig.webp')`)
    }

    const[loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    }, []);

  return (
    <div>
      {loading ? (
        <div className='loading-container'>
          <div className='spinner'/>
        </div>
      ) : (
        <div style={isMobile ? {overflow: 'hidden'} : {}}>
          <NavBar/>
          <div>            
              {/* Div1 */}
              <div id='inicio'>
                <div>
                  <Div1/>
                </div>
              </div>
      
              {/* Body */}
              <div>
                <div>
                  <Festa />
                  <Patrocinadores  />
                  <Local />
                  <Edicoes />
                  <Filantropia />
                  <Footer />
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
    )
  
}


export default App
