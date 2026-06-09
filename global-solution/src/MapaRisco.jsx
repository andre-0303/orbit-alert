import { useState } from 'react'
import LateralMenu from './LateralMenu'
import './MapaRisco.css'
import riskMapImage from '../assets/riskMap.png'
import notificationIcon from '../assets/notification_icon.svg'
import downloadIcon from '../assets/download_icon.png'


function Home({ onNavigate, currentPage }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="risk-map-container">
            <div className="risk-map-header">
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
                <div className='risk-map-message-container'>

                    <div
                        className="risk-map-message">
                        <h1>Mapa de risco</h1>
                        <p>Aqui está o panorama atual dos riscos em sua região.</p>
                    </div>

                    <div
                        className="notification-and-export">
                        <div className="notification">
                            <img className="notification-icon" src={notificationIcon} alt="Notificação"/>
                        </div>
                        <div className="export">
                            <button className="export-button">
                                <img src={downloadIcon} alt="Download" />
                                <p>Exportar</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="risk-map-filters-container">
                <div className="risk-map-filters">
                    <button className="filter-button" type="button">
                        <span className="filter-icon">⌖</span>
                        Brasil
                        <span className="filter-arrow">⌄</span>
                    </button>

                    <button className="filter-button" type="button">
                        Todos os riscos
                        <span className="filter-arrow">⌄</span>
                    </button>

                    <button className="filter-button" type="button">
                        Hoje
                        <span className="filter-arrow">⌄</span>
                    </button>

                    <button className="filter-button" type="button">
                        Camadas
                        <span className="filter-arrow">⌄</span>
                    </button>
                </div>
            </div>

            <div className='risk-map-content-map'>
                <img src={riskMapImage} alt="Mapa de risco" />
            </div>
        </div>
    )
}

export default Home