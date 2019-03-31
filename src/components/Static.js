import React, { Component } from 'react'
import AppBar from './AppBar'

export default class gallery extends Component {
  render() {
    return (
      <div>
        <div className="page">
          <div className="errorwrapper">
            <div className="allthefields">
              All fields are required.
              <div className="error-box-close">
                X
              </div>
            </div>
          </div>
          <header className="background" id="header">
          <AppBar/>
            <div className="header-social-media-icons-wrapper">
              <div className="row">		
                <div className="column">
                  <div className="header-social-media-icons">
                    <a target="_blank" href="https://www.facebook.com/360selfie.hu/">
                      <img src="icons/facebook.svg" />
                    </a>
                  </div>
                  <div className="header-social-media-icons">
                    <a target="_blank" href="https://www.instagram.com/360selfie.hu/">
                      <img src="icons/instagram.svg" />
                    </a>
                  </div>
                  <div className="header-social-media-icons">
                    <a target="_blank" href="https://www.youtube.com/channel/UC_zPAD31Hw7fv1zwl0aHLOw">
                      <img src="icons/youtube.svg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="header-title-wrapper">
                <h1 className="header-title">
                  <img className="header-logo" src="icons/logo_360.svg" />
                </h1>
              </div>			
            </div>
          </header>
          <section id="projects" className="projects">
            <div className="projects-wrapper">
              <div className="projects-part">
                <div className="projects-part-left-wrapper">
                  <img className="spinning-logo" id="spinning-logo" src="icons/circles.svg" />
                </div>
              </div>
              <div className="projects-part">
                <div className="projects-part-right-wrapper">
                  <div className="projects-description">
                    <img className="right" src="icons/emlekek360fokban.svg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="about" id="aboutus">
            <div className="part-title">
              <div className="title title-black">
                RÓLUNK
              </div>
            </div>
            <div className="about-part-content">
              <div className="half-border-width" />
              <div className="text-wrapper">
                <h1 className="step wow fadeIn " data-wow-duration="1s" data-wow-delay=".1s"> Hogy mi is a 360 SELFIE ?</h1>
                <div className="text">
                  <p className="step wow fadeIn " data-wow-duration="1s" data-wow-delay=".1s">
                    Egy rendezvény nem telhet el a pillanatok megörökítése nélkül.
                    Legyen szó baráti vagy céges összejövetelről, esküvőről vagy születésnapról,
                    a <b>360 SELFIE</b> teljes panorámájában ragadja meg a pillanatot,
                    mindezt mozgókép formájában!
                  </p>
                  <p className="step wow fadeIn " data-wow-duration="1s" data-wow-delay=".1s">
                    Tapasztald meg a forgó fotószínpadunk általi egyedülálló 360 fokos élményt
                    és tedd felejthetetlenné rendezvényed a szelfik új generációjával!
                  </p>
                </div>
              </div>
              <div className="half-border" />
              <div className="logo-wrapper">
                <div className="logo wow bounceIn" data-wow-delay=".2s">
                  <img className="logo-image" src="icons/icon1.svg" />
                  <div className="description">
                    360 FOKOS FORDULAT
                  </div>
                </div>
                <div className="logo wow bounceIn" data-wow-delay=".4s">
                  <img className="logo-image" src="icons/icon2.svg" />
                  <div className="description">
                    ÉLŐ FÉNYKÉPEK
                  </div>
                </div>
                <div className="logo wow bounceIn" data-wow-delay=".6s">
                  <img className="logo-image" src="icons/icon3.svg" />
                  <div className="description">
                    AZONNALI MEGOSZTÁS
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="details" id="details">
            <div className="part-title">
              <div className="title">
                RÉSZLETEK
              </div>
            </div>
            <div className="part-content">
              <div className="how-to">
                <div className="step wow fadeIn " data-wow-duration="1s" data-wow-delay=".1s">
                  <div className="number">
                    <img className="logo-image" src="icons/1.svg" />
                  </div>
                  <div className="command">
                    <h2> LÉPJ A
                      SZÍNPADRA!</h2>
                  </div>
                  <div className="description">
                    A színpad lehetővé teszi, hogy akár párban
                    is kipróbáljátok a 360 SELFIE-t!
                  </div>
                </div>
                <div className="step wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                  <div className="number">
                    <img className="logo-image" src="icons/2.svg" />
                  </div>
                  <div className="command">
                    <h2>PÓZOLJ!</h2>
                  </div>
                  <div className="description">
                    A kamera a visszaszámlálást követően elindul.
                    Amíg körbehalad, neked csak annyi a dolgod,
                    hogy belenézz a kamerába és felvedd a
                    tökéletes pózt!
                  </div>
                </div>
                <div className="step wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                  <div className="number">
                    <img className="logo-image" src="icons/3.svg" />
                  </div>
                  <div className="command">
                    <h2> NÉZD MEG,
                      OSZD MEG!</h2>
                  </div>
                  <div className="description">
                    Azonnal láthatod magad a 360 fokos
                    mozgókép formájában, amit elküldhetsz
                    magadnak és rögtön meg is oszthatsz!
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contact" id="contact">
            <div className="part-title">
              <div className="title">
                KAPCSOLAT
              </div>
            </div>
            <div className="part-content">
              <div className="quarter-border" />
              <h2>
                ÍRJ NEKÜNK!
              </h2>
              <div className="contact-description">
                Kérj ajánlatot az alábbiak kitöltésével és mi hamarosan felvesszük veled a kapcsolatot.
              </div>
              <div className="contact-subsection">
                <div className="contact-subsection-left">
                  <div className="contact-subsection-left-wrapper">
                    <form>
                      <div className="input-row">
                        <div className="input-element">
                          <input type="text" name="name" placeholder="Vezetéknév" required />
                        </div>
                        <div className="input-element">
                          <input type="text" name="name" placeholder="Keresztnév" required />
                        </div>
                      </div>
                      <div className="input-row">
                        <div className="input-element">
                          <input type="mail" name="mail" placeholder="E-mail cím" required />
                        </div>
                        <div className="input-element">
                          <input type="phone" name="phone" placeholder="Telefonszám" required />
                        </div>
                      </div>
                      <div className="input-row">
                        <div className="input-element">
                          <input type="text" name="eventname" placeholder="Esemény neve" required />
                        </div>
                        <div className="input-element">
                          <input type="text" name="date" placeholder="Esemény dátuma" required />
                        </div>
                      </div>
                      <div className="input-row">
                        <div className="input-element">
                          <textarea cols="num" rows="num" type="message" name="message" placeholder="Üzenet" required defaultValue={""} />
                        </div>
                      </div>
                      <div className="submit-wrapper">
                        <div className="button" id="sendbutton">
                          KÜLDÉS
                        </div>
                      </div>
                    </form> 
                    <div className="contact-section-logo-wrapper">
                      <img className="contact-section-logo" src="icons/360.gif" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div className="border">
              <div className="footer-content-wrapper">
                <div className="logo">
                  <img className="footer-logo" src="icons/logo_footer.svg" />
                </div>
                <div className="icons">
                  <div className="footer-social-media-icons-wrapper">
                    <div className="text">	 +36 20 823 3319 info@360selfie.hu</div>  
                    <div className="text">
                      © 2018  Minden jog fenntartva. 
                    </div>
                    <div className="social">
                      <div className="footer-social-media-icons">
                        <a target="_blank" href="https://www.facebook.com/360selfie.hu/">
                          <img src="icons/facebook.svg" />
                        </a>
                      </div>
                      <div className="footer-social-media-icons">
                        <a target="_blank" href="https://www.facebook.com/360selfie.hu/">
                          <img src="icons/instagram.svg" />
                        </a>
                      </div>
                      <div className="footer-social-media-icons">
                        <a target="_blank" href="https://www.youtube.com/channel/UC_zPAD31Hw7fv1zwl0aHLOw">
                          <img src="icons/youtube.svg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

