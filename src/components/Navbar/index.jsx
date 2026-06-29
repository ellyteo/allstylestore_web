import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './style.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/login',     label: 'Login'     },
    { to: '/catalogos', label: 'Catálogos' },
    { to: '/produtos',  label: 'Produtos'  },
    { to: '/sobre',     label: 'Sobre'     },
    { to: '/contato',   label: 'Contato'   },
  ]

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="AllStyleStore – Página inicial">
          <img
            src="/allstylestore.png"
            alt="AllStyleStore"
            className="navbar__logo-img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'block'
            }}
          />
          <span className="navbar__logo-text" style={{ display: 'none' }}>
            ALLSTYLESTORE
          </span>
        </Link>

        <nav
          className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
          aria-label="Navegação principal"
        >
          <ul className="navbar__links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
