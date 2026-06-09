import { useState } from 'react'
import {
  Bell,
  Upload,
  Globe,
  ShieldAlert,
  CalendarDays,
  Layers3,
  ChevronDown,
} from 'lucide-react'
import LateralMenu from './LateralMenu'
import './MapaRisco.css'
import riskMapImage from '../assets/riskMap.png'

const FILTERS = [
  { id: 'region',  Icon: Globe,        label: 'Brasil',         hasArrow: true  },
  { id: 'type',    Icon: ShieldAlert,   label: 'Todos os riscos', hasArrow: true  },
  { id: 'period',  Icon: CalendarDays,  label: 'Hoje',            hasArrow: true  },
  { id: 'layers',  Icon: Layers3,       label: 'Camadas',         hasArrow: true  },
]

function MapaRisco({ onNavigate, currentPage }) {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeFilter, setActive]   = useState(null)

  return (
    <div className="mr-page">
      <header className="mr-header">
        <div className="mr-header-left">
          <button
            className={`mr-hamburger${menuOpen ? ' mr-hamburger-hidden' : ''}`}
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span /><span /><span />
          </button>
          <LateralMenu
            menuOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            onNavigate={onNavigate}
            currentPage={currentPage}
          />
          <div className="mr-title-block">
            <div className="mr-title-row">
              <span className="mr-title-accent" />
              <h1 className="mr-h1">Mapa de risco</h1>
            </div>
            <p className="mr-subtitle">Panorama atual dos riscos em sua região.</p>
          </div>
        </div>

        <div className="mr-header-right">
          <button className="mr-bell-btn" type="button" aria-label="Notificações">
            <Bell size={18} strokeWidth={1.8} />
            <span className="mr-bell-dot" />
          </button>

          <button className="mr-export-btn" type="button">
            <Upload size={14} strokeWidth={2} />
            Exportar
          </button>
        </div>
      </header>

      <div className="mr-divider" />

      <div className="mr-toolbar">
        <div className="mr-filters">
          {FILTERS.map(({ id, Icon, label }) => (
            <button
              key={id}
              type="button"
              className={`mr-filter${activeFilter === id ? ' mr-filter-active' : ''}`}
              onClick={() => setActive(activeFilter === id ? null : id)}
            >
              <Icon size={13} strokeWidth={2} className="mr-filter-icon" />
              {label}
              <ChevronDown size={12} strokeWidth={2.5} className="mr-filter-chevron" />
            </button>
          ))}
        </div>

        <span className="mr-live-badge">
          <span className="mr-live-dot" />
          Ao vivo
        </span>
      </div>

      <div className="mr-map-area">
        <img src={riskMapImage} alt="Mapa de risco" className="mr-map-img" />
      </div>
    </div>
  )
}

export default MapaRisco
