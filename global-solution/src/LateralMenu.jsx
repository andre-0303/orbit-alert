import './LateralMenu.css'
import Logo from '../assets/OrbitAlert.png'
import OrbitIcon from '../assets/OrbitIcon.png'
import configIcon from '../assets/config_icon.svg'
import localizationIcon from '../assets/localization_icon.svg'
import reportIcon from '../assets/report_icon.svg'
import sateliteIcon from '../assets/satelite_icon.svg'
import notificationicon from '../assets/notification_icon.svg'
import dashboardIcon from '../assets/dashboard_icon.svg'

function LateralMenu({ menuOpen, onClose }) {
  const menuItems = [
    { label: 'Dashboard', icon: dashboardIcon },
    { label: 'Mapa de Risco', icon: localizationIcon },
    { label: 'Alertas', icon: notificationicon },
    { label: 'Previsoes', icon: sateliteIcon },
    { label: 'Relatorios', icon: reportIcon },
    { label: 'Configuracoes', icon: configIcon },
  ]

  return (
    <>
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <img src={OrbitIcon} className="logo-icon" alt="" />
            <img src={Logo} className="logo-image" alt="OrbitAlert" />
          </div>
        </div>

        <nav className="menu">
          {menuItems.map((item) => (
            <a href="#" className="menu-item" key={item.label}>
              <span className="menu-icon">
                {item.icon && <img src={item.icon} alt="" />}
              </span>
              <span className="menu-text">{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {menuOpen && (
        <button
          className="overlay"
          type="button"
          aria-label="Fechar menu"
          onClick={onClose}
        />
      )}
    </>
  )
}

export default LateralMenu