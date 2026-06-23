import { Link } from 'react-router-dom'
import './style.css'

const catalogos = [
  {
    id: 1,
    titulo: 'Coleção Asfalto',
    temporada: 'Verão 2025',
    itens: 24,
    cor: '#1a3040',
  },
  {
    id: 2,
    titulo: 'Be Could',
    temporada: 'Cápsula',
    itens: 12,
    cor: '#2a1a30',
  },
  {
    id: 3,
    titulo: 'Caos Urbano',
    temporada: 'Inverno 2025',
    itens: 18,
    cor: '#1a2820',
  },
  {
    id: 4,
    titulo: 'Drop Exclusivo',
    temporada: 'Edição Limitada',
    itens: 8,
    cor: '#301a1a',
  },
  {
    id: 5,
    titulo: 'Casacos & Jaquetas',
    temporada: 'Outono 2025',
    itens: 16,
    cor: '#1a2030',
  },
  {
    id: 6,
    titulo: 'Camisetas Core',
    temporada: 'Atemporal',
    itens: 32,
    cor: '#202020',
  },
]

export default function Catalogos() {
  return (
    <div className="catalogos">
      <div className="catalogos__header">
        <div className="container">
          <h1 className="catalogos__title">CATÁLOGOS</h1>
          <p className="catalogos__sub">Todas as coleções, drops e edições especiais.</p>
        </div>
      </div>

      <div className="container">
        <div className="catalogos__grid">
          {catalogos.map((cat) => (
            <article key={cat.id} className="cat-card" style={{ '--cat-bg': cat.cor }}>
              <div className="cat-card__thumb" />
              <div className="cat-card__body">
                <span className="cat-card__temporada">{cat.temporada}</span>
                <h2 className="cat-card__titulo">{cat.titulo}</h2>
                <span className="cat-card__itens">{cat.itens} peças</span>
                <Link to="/produtos" className="cat-card__cta">
                  Ver catálogo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
