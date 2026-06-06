import './LateralMenu.css'
import Logo from '../assets/OrbitAlert.png'
import OrbitIcon from '../assets/OrbitIcon.png'
import configIcon from '../assets/config_icon.svg'
import localizationIcon from '../assets/localization_icon.svg'
import reportIcon from '../assets/report_icon.svg'
import sateliteIcon from '../assets/satelite_icon.svg'
import notificationicon from '../assets/notification_icon.svg'
import dashboardIcon from '../assets/dashboard_icon.svg'

function LateralMenu({ menuOpen, onClose, onNavigate, currentPage }) {
  const menuItems = [
    { label: 'Dashboard', icon: dashboardIcon, page: 'home' },
    { label: 'Mapa de Risco', icon: localizationIcon, page: null },
    { label: 'Alertas', icon: notificationicon, page: null },
    { label: 'Previsões', icon: sateliteIcon, page: 'previsoes' },
    { label: 'Relatórios', icon: reportIcon, page: null },
    { label: 'Configurações', icon: configIcon, page: null },
  ]

  const handleItemClick = (page) => {
    if (page && onNavigate) {
      onNavigate(page)
      onClose()
    }
  }

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
            <button
              type="button"
              className={`menu-item${currentPage === item.page ? ' menu-item-active' : ''}${!item.page ? ' menu-item-disabled' : ''}`}
              key={item.label}
              onClick={() => handleItemClick(item.page)}
            >
              <span className="menu-icon">
                {item.icon && <img src={item.icon} alt="" />}
              </span>
              <span className="menu-text">{item.label}</span>
            </button>
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
