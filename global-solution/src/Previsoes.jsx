import { useState } from 'react'
import {
  CloudRain,
  Droplets,
  TreePine,
  Waves,
  Mountain,
  Leaf,
  TrendingUp,
  Minus,
  AlertTriangle,
  User,
} from 'lucide-react'
import './Previsoes.css'
import LateralMenu from './LateralMenu'
import mapImg from '../assets/map.png'

const TABS = ['Visão Geral', 'Enchentes', 'Deslizamentos', 'Secas']

const regions = [
  { icon: 'user',  name: 'São Sebastião, SP', type: 'Enchente',     typeColor: '#149cff', prob: 39, trend: 'up' },
  { icon: 'user',  name: 'Blumenau, SC',       type: 'Enchente',     typeColor: '#149cff', prob: 81, trend: 'equal' },
  { icon: 'alert', name: 'Petrópolis, RJ',     type: 'Deslizamento', typeColor: '#e8edf7', prob: 74, trend: 'up' },
  { icon: 'user',  name: 'Maceió, AL',         type: 'Enchente',     typeColor: '#149cff', prob: 24, trend: 'equal' },
]

const factors = [
  { Icon: CloudRain,  label: 'Precipitação' },
  { Icon: Droplets,   label: 'Umidade do solo' },
  { Icon: TreePine,   label: 'Uso do solo' },
  { Icon: Waves,      label: 'Nível de rios' },
  { Icon: Mountain,   label: 'Topografia' },
  { Icon: Leaf,       label: 'Cobertura Vegetal' },
]

function probColor(prob) {
  if (prob >= 70) return '#ef4444'
  if (prob >= 40) return '#f97316'
  return '#94a3b8'
}

function Previsoes({ onNavigate, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Visão Geral')

  return (
    <div className="previsoes">
      <header className="prev-header">
        <div className="prev-header-left">
          <button
            className={`hamburger${menuOpen ? ' hamburger-hidden' : ''}`}
            type="button"
            aria-label="Abrir menu"
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
          <div className="prev-title-block">
            <h1 className="prev-h1">Previsões</h1>
            <p className="prev-subtitle">Modelos de IA analisando padrões e tendências.</p>
          </div>
        </div>

        <div className="prev-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`prev-tab${activeTab === tab ? ' prev-tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <div className="prev-divider-line" />

      <div className="prev-row prev-row-top">
        {/* Probability card */}
        <div className="prev-card prev-prob-card">
          <h3 className="prev-card-title">Probabilidade de eventos</h3>
          <p className="prev-card-sub">(Próximos 7 dias)</p>
          <hr className="prev-hr" />

          <div className="prev-prob-body">
            <div className="prev-donut-wrap">
              <div className="prev-donut">
                <div className="prev-donut-hole">
                  <span className="prev-donut-pct">72%</span>
                  <span className="prev-donut-label">Risco alto</span>
                </div>
              </div>
            </div>

            <ul className="prev-legend">
              <li className="prev-legend-item">
                <span className="prev-dot" style={{ background: '#ef4444' }} />
                <span className="prev-legend-name">Enchentes</span>
                <span className="prev-legend-pct">72%</span>
              </li>
              <li className="prev-legend-item">
                <span className="prev-dot" style={{ background: '#f97316' }} />
                <span className="prev-legend-name">Deslizamentos</span>
                <span className="prev-legend-pct">61%</span>
              </li>
              <li className="prev-legend-item">
                <span className="prev-dot" style={{ background: '#eab308' }} />
                <span className="prev-legend-name">Secas</span>
                <span className="prev-legend-pct">49%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="prev-card prev-map-card">
          <div className="prev-map-title-row">
            <span className="prev-map-bar" />
            <span className="prev-map-title-text">MAPA DE PROBABILIDADE</span>
          </div>
          <div className="prev-map-img-wrap">
            <img src={mapImg} alt="Mapa de probabilidade" className="prev-map-img" />
            <div className="prev-map-stats">
              <div className="prev-map-stat">
                <span className="prev-map-stat-val">98,6%</span>
                <span className="prev-map-stat-lbl">Área monitorada</span>
              </div>
              <div className="prev-map-stat-sep" />
              <div className="prev-map-stat">
                <span className="prev-map-stat-val">2,3s</span>
                <span className="prev-map-stat-lbl">Tempo de resposta</span>
              </div>
              <div className="prev-map-stat-sep" />
              <div className="prev-map-stat">
                <span className="prev-map-stat-val">24</span>
                <span className="prev-map-stat-lbl">Satélites</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prev-row prev-row-bottom">
        {/* Regions table */}
        <div className="prev-card prev-regions-card">
          <div className="prev-regions-header">
            <h3 className="prev-card-title" style={{ margin: 0 }}>Principais regiões em risco</h3>
            <div className="prev-regions-col-labels">
              <span>Probabilidade</span>
              <span>Tendência</span>
            </div>
          </div>

          <div className="prev-regions-list">
            {regions.map((r, i) => (
              <div key={i} className="prev-region-row">
                <div className="prev-region-icon-wrap">
                  {r.icon === 'alert'
                    ? <AlertTriangle size={15} color="#fbbf24" />
                    : <User size={15} color="#60a5fa" />
                  }
                </div>
                <div className="prev-region-info">
                  <span className="prev-region-name">{r.name}</span>
                  <span className="prev-region-type" style={{ color: r.typeColor }}>{r.type}</span>
                </div>
                <span className="prev-region-prob" style={{ color: probColor(r.prob) }}>
                  {r.prob}%
                </span>
                <span className="prev-region-trend">
                  {r.trend === 'up'
                    ? <TrendingUp size={15} color="#22c55e" />
                    : <Minus size={15} color="#eab308" />
                  }
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="prev-card prev-factors-card">
          <h3 className="prev-card-title">Fatores analisados pela IA</h3>
          <div className="prev-factors-grid">
            {factors.map(({ Icon, label }) => (
              <div key={label} className="prev-factor-item">
                <div className="prev-factor-icon-wrap">
                  <Icon size={24} color="#7cb9ff" strokeWidth={1.6} />
                </div>
                <span className="prev-factor-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Previsoes
