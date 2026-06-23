import { useState } from 'react'
import './style.css'

const categorias = ['Todos', 'Casacos', 'Camisetas', 'Calças', 'Acessórios']

const produtos = [
  { id: 1, nome: 'Calça Cargo Delave', preco: 'R$ 289', cat: 'Calças', cor: '#2a3a45' },
  { id: 2, nome: 'Jaqueta Vintage Wash', preco: 'R$ 459', cat: 'Casacos', cor: '#3a3a2a' },
  { id: 3, nome: 'Casaco Militar Verde', preco: 'R$ 389', cat: 'Casacos', cor: '#2a3a2a' },
  { id: 4, nome: 'Cap Bucket Bege', preco: 'R$ 129', cat: 'Acessórios', cor: '#3a3020' },
  { id: 5, nome: 'Camiseta Day 1', preco: 'R$ 149', cat: 'Camisetas', cor: '#a8c4d0' },
  { id: 6, nome: 'Camiseta Day 2', preco: 'R$ 149', cat: 'Camisetas', cor: '#1a1a1a' },
  { id: 7, nome: 'Moletom Oversize', preco: 'R$ 319', cat: 'Casacos', cor: '#2a2a1a' },
  { id: 8, nome: 'Calça Jeans Wide', preco: 'R$ 249', cat: 'Calças', cor: '#2a3550' },
  { id: 9, nome: 'Camiseta Day 3', preco: 'R$ 159', cat: 'Camisetas', cor: '#2c4a2c' },
  { id: 10, nome: 'Bag Fragile', preco: 'R$ 199', cat: 'Acessórios', cor: '#1a1a30' },
  { id: 11, nome: 'Jaqueta Bomber', preco: 'R$ 499', cat: 'Casacos', cor: '#3a1a1a' },
  { id: 12, nome: 'Camiseta Day 4', preco: 'R$ 149', cat: 'Camisetas', cor: '#4a6a4a' },
]

export default function Produtos() {
  const [catAtiva, setCatAtiva] = useState('Todos')

  const filtrados = catAtiva === 'Todos'
    ? produtos
    : produtos.filter(p => p.cat === catAtiva)

  return (
    <div className="produtos">
      <div className="produtos__header">
        <div className="container">
          <h1 className="produtos__title">PRODUTOS</h1>
          <p className="produtos__sub">Vista o caos com estilo.</p>
        </div>
      </div>

      <div className="container">
        {/* Filtros */}
        <div className="produtos__filtros" role="tablist" aria-label="Filtrar por categoria">
          {categorias.map(cat => (
            <button
              key={cat}
              className={`filtro-btn ${catAtiva === cat ? 'filtro-btn--ativo' : ''}`}
              onClick={() => setCatAtiva(cat)}
              role="tab"
              aria-selected={catAtiva === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="produtos__grid">
          {filtrados.map(p => (
            <article key={p.id} className="prod-card">
              <div
                className="prod-card__img"
                style={{ background: p.cor }}
              >
                <button className="prod-card__quick-add" aria-label={`Adicionar ${p.nome} ao carrinho`}>
                  + Carrinho
                </button>
              </div>
              <div className="prod-card__info">
                <span className="prod-card__cat">{p.cat}</span>
                <h3 className="prod-card__nome">{p.nome}</h3>
                <div className="prod-card__footer">
                  <span className="prod-card__preco">{p.preco}</span>
                  <button className="prod-card__comprar">Comprar</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
