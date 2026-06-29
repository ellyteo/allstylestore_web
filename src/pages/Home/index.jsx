import { Link } from 'react-router-dom'
import './style.css'

/* ── Produto card ── */
function ProdutoCard({ nome, img, alt, btnLabel }) {
  return (
    <div className="produto-card">
      <div className="produto-card__img-wrap">
        <img src={img} alt={alt || nome} />
        <button className="produto-card__quick" aria-label={`Comprar ${nome}`}>
          Ver produto
        </button>
      </div>
      <button className="produto-card__btn">
        <span>{btnLabel || 'Comprar\nagora'}</span>
        <img src="/comprarAgora.png" alt="" aria-hidden="true" className="produto-card__bag-icon" onError={e => e.target.style.display='none'} />
      </button>
    </div>
  )
}

export default function Home() {
  const produtos = [
    { nome: 'Calça Jeans',    img: '/jeansBeCould.png',   key: 'jeans'   },
    { nome: 'Jaqueta',        img: '/jaquetaBeCould.png', key: 'jaqueta' },
    { nome: 'Camisa',         img: '/shirtBeCould.png',   key: 'shirt'   },
    { nome: 'Cap',            img: '/capBeCould.png',     key: 'cap'     },
  ]

  const camisetas = [
    { label: 'day 1', bg: '#a8c4d0' },
    { label: 'day 2', bg: '#1a1a1a' },
    { label: 'day 3', bg: '#2c4a2c' },
    { label: 'day 4', bg: '#4a6a4a' },
  ]

  return (
    <div className="home">

      {/* ══ HERO – banner.png ══ */}
      <section className="hero">
        <img src="/banner.png" alt="AllStyleStore banner" className="hero__bg-img" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <img
            src="/bannerInteiro.png"
            alt="AllStyleStore"
            className="hero__logo-img"
            onError={e => {
              e.target.style.display = 'none'
              document.querySelector('.hero__title-fallback').style.display = 'block'
            }}
          />
          <h1 className="hero__title-fallback" style={{ display: 'none' }}>ALLSTYLESTORE</h1>
        </div>
      </section>

      {/* ══ VISTA O CAOS – bannerVistaCaos.png ══ */}
      <section className="caos">
        <div className="container">
          <div className="caos__banner-wrap">
            <img
              src="/bannerVistaCaos.png"
              alt="Vista o Caos com Estilo"
              className="caos__banner-img"
            />
          </div>
        </div>
      </section>

      {/* ══ BE COULD – bannerBeCould.png ══ */}
      <section className="becould">
        <div className="container">
          <img
            src="/bannerBeCould.png"
            alt="Be Could"
            className="becould__img"
          />
        </div>
      </section>

      {/* ══ PRODUTOS – grid com imagens Be Could ══ */}
      <section className="produtos-grid">
        <div className="container">
          <div className="produtos-grid__inner">
            {produtos.map((p) => (
              <ProdutoCard key={p.key} nome={p.nome} img={p.img} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CASACOS + CAMISETAS ══ */}
      <section className="featured">
        <div className="container">
          <div className="featured__grid">

            {/* Casacos */}
            <div className="featured__casacos">
              <img
                src="/casacosBanner.png"
                alt="Casacos"
                className="featured__casacos-img"
              />
              <div className="featured__info">
                <span className="featured__cat">CASACOS</span>
                <Link to="/produtos" className="featured__cta">
                  <img
                    src="/casacosButton.png"
                    alt="Comprar agora"
                    className="featured__cta-img"
                    onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='inline' }}
                  />
                  <span style={{ display: 'none' }}>Comprar ↗</span>
                </Link>
              </div>
            </div>

            {/* Camisetas */}
            <div className="featured__camisetas">
              <img
                src="/camisetasBanner.png"
                alt="Camisetas"
                className="featured__camisetas-img"
              />
              <Link to="/produtos" className="featured__camisetas-btn">
                <img
                  src="/camisetasButton.png"
                  alt="Ver camisetas"
                  onError={e => { e.target.replaceWith(Object.assign(document.createElement('span'), { textContent: 'Camisetas →' })) }}
                />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SALE BANNER ══ */}
      <section className="sale-banner">
        <div className="container sale-banner__content">

          {/* Título SALE */}
          <div className="sale-banner__titles">
            <img
              src="/saleTitulo.png"
              alt="Sale"
              className="sale-banner__titulo-img"
              onError={e => e.target.style.display='none'}
            />
          </div>

          {/* Banner central */}
          <div className="sale-banner__main">
            <img
              src="/saleBanner.png"
              alt="Sale Now - Ver Coleção"
              className="sale-banner__img"
            />
          </div>

          {/* Botão */}
          <Link to="/catalogos" className="sale-banner__btn-wrap">
            <img
              src="/saleButton.png"
              alt="Ver Coleção"
              className="sale-banner__btn-img"
              onError={e => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <span className="sale-banner__btn-fallback" style={{ display: 'none' }}>
              VER COLEÇÃO →
            </span>
          </Link>

        </div>
      </section>

    </div>
  )
}
