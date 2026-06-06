import { useState } from 'react'
import './Home.css'
import LateralMenu from './LateralMenu'
import satelite2 from '../assets/satelite2.png'
import satelite_icon from '../assets/satelite_icon.svg'
import AI from '../assets/AI.svg'
import alertIcon from '../assets/alert_icon.svg'
import map from '../assets/map.png'
import camera_icon from '../assets/camera_icon.svg'
import setpoint_icon from '../assets/setpoint_icon.svg'
import raio_icon from '../assets/raio_icon.svg'
import earth from '../assets/earth.png'
import people_icon from '../assets/people_icon.svg'

import rainIcon from '../assets/rain_icon.svg'
import sunIcon from '../assets/sun_icon.svg'

function Home({ onNavigate, currentPage }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="home">
            <div className="home-header">
                <button
                    className={`hamburger ${menuOpen ? 'hamburger-hidden' : ''}`}
                    type="button"
                    aria-label="Abrir menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <LateralMenu
                    menuOpen={menuOpen}
                    onClose={() => setMenuOpen(false)}
                    onNavigate={onNavigate}
                    currentPage={currentPage}
                />

                <div
                    className="welcome-message">
                    <h1>Bom dia, João!</h1>
                    <p>Aqui está o panorama atual dos riscos em sua região.</p>
                </div>
            </div>
            <div className="card-content">
                <div className='card'>
                    <div className="icon-card-satelite">
                        <img src={satelite_icon} alt="" style={{ width: '50%', height: '50%' }} />
                    </div>
                    <div>
                        <p>Satelites ativos</p>
                        <h1>14</h1>
                        <p>NASA 8 . ESA 6</p>

                    </div>
                </div>
                <div className="card">
                    <div className="icon-card-areas">
                        <img src={AI} style={{ width: '50%', height: '50%' }} />
                    </div>

                    <div>
                        <p>Areas Monitoradas</p>
                        <h1>5.342</h1>
                        <p>municipios</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon-card-alertas">
                        <img src={alertIcon} style={{ width: '50%', height: '50%', stroke: '#FF0000' }} />
                    </div>

                    <div>
                        <p>Alertas ativos</p>
                        <h1>27</h1>
                        <p>em 8 estados</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon-card-pessoas">
                        <img src={people_icon} />
                    </div>
                    <div>
                        <p>Pessoas em risco</p>
                        <h1>3,2m</h1>
                        <p>pessoas</p>
                    </div>
                </div>

            </div>

            <div className="map-content">
                <div className="map-placeholder">
                    <img src={map} alt="Mapa" />
                </div>

                <div className="map-info">
                    <div className="map-info-header">
                        <h3>Alertas ativos</h3>
                        <a href="#">Ver todos</a>
                    </div>

                    <div className="alert-list">
                        <div className="alert-item">
                            <div className="alert-icon alert-red">
                                <img src={alertIcon} alt="" />
                            </div>

                            <div className="alert-text">
                                <p>Enchente</p>
                                <span>São Sebastião, SP</span>
                            </div>

                            <span className="alert-time">10:15</span>
                        </div>

                        <div className="alert-item">
                            <div className="alert-icon alert-yellow">
                                <img src={alertIcon} alt="" />
                            </div>

                            <div className="alert-text">
                                <p>Deslizamento</p>
                                <span>Petrópolis, RJ</span>
                            </div>

                            <span className="alert-time">09:45</span>
                        </div>

                        <div className="alert-item">
                            <div className="alert-icon alert-gold">
                                <img src={alertIcon} alt="" />
                            </div>

                            <div className="alert-text">
                                <p>Seca</p>
                                <span>Salvador, BA</span>
                            </div>

                            <span className="alert-time">09:30</span>
                        </div>

                        <div className="alert-item">
                            <div className="alert-icon alert-red">
                                <img src={alertIcon} alt="" />
                            </div>

                            <div className="alert-text">
                                <p>Enchente</p>
                                <span>Teresina, PI</span>
                            </div>

                            <span className="alert-time">09:12</span>
                        </div>
                    </div>

                    <button className="map-button" type="button">
                        Ver mapa completo
                    </button>
                </div>
            </div>
            <div className='footer-cards'>
                <div className="forecast-card">
                    <h3>Previsões (Próximos 7 dias)</h3>

                    <div className="forecast-list">
                        <div className="forecast-item">
                            <div className="forecast-icon forecast-blue">
                                <img src={rainIcon} alt="" />
                            </div>

                            <p>Enchentes</p>
                            <span className="risk-high-blue">Alto risco</span>
                            <p>12 regiões</p>
                        </div>

                        <div className="forecast-item">
                            <div className="forecast-icon forecast-brown">
                                <img src={alertIcon} alt="" />
                            </div>

                            <p>Deslizamentos</p>
                            <span className="risk-high-red">Alto risco</span>
                            <p>8 regiões</p>
                        </div>

                        <div className="forecast-item">
                            <div className="forecast-icon forecast-yellow">
                                <img src={sunIcon} alt="" />
                            </div>

                            <p>Secas</p>
                            <span className="risk-medium">Médio risco</span>
                            <p>15 regiões</p>
                        </div>

                    </div>
                </div>

                <div className="realtime-card">
                    <div className="realtime-header">
                        <h3>Dados em tempo real</h3>
                        <p>Última atualização: 10:24:30</p>
                    </div>

                    <div className="realtime-list">
                        <div className="realtime-item">
                            <div className="realtime-icon">
                                <img src={satelite_icon} alt="" />
                            </div>
                            <p>Satélites</p>
                            <span>14 online</span>
                        </div>

                        <div className="realtime-item">
                            <div className="realtime-icon">
                                <img src={camera_icon} alt="" />
                            </div>
                            <p>Imagens hoje</p>
                            <span>2.876</span>
                        </div>

                        <div className="realtime-item">
                            <div className="realtime-icon">
                                <img src={setpoint_icon} alt="" />
                            </div>
                            <p>Cobertura</p>
                            <span>98,5%</span>
                        </div>

                        <div className="realtime-item">
                            <div className="realtime-icon">
                                <img src={raio_icon} alt="" />
                            </div>
                            <p>Latência</p>
                            <span>2.3s</span>
                        </div>
                    </div>
                </div>

                <div className="integracao-nativa">
                    <div className="integracao-text">
                        <h3>Integração nativa</h3>
                        <p>Carta Internacional
                            Space and Major 
                            Disasters</p>
                    </div>

                    <div className="integracao-image">
                        <img src={earth} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home