import './style.css'

export default function Sobre() {
  return (
    <div className="sobre">
      <div className="sobre__hero">
        <div className="container">
          <h1 className="sobre__title">SOBRE</h1>
        </div>
      </div>

      <div className="container sobre__content">
        <div className="sobre__manifesto">
          <h2 className="sobre__manifesto-title">
            ESTILO NÃO É O QUE VOCÊ VESTE.<br />
            É COMO VOCÊ VIVE O ASFALTO.
          </h2>
          <div className="sobre__manifesto-line" aria-hidden="true" />
          <p className="sobre__manifesto-text">
            A AllStyleStore nasceu nas ruas, no caos do cotidiano, na ideia de que moda
            não é privilégio — é expressão. Cada peça conta uma história, cada look é
            uma declaração.
          </p>
          <p className="sobre__manifesto-text">
            Trabalhamos com marcas selecionadas e drops exclusivos para quem não segue
            tendências: quem cria tendências. Nosso catálogo é uma curadoria do que
            existe de mais autêntico na cena urbana nacional e internacional.
          </p>
        </div>

        <div className="sobre__stats">
          {[
            { num: '500+', label: 'Peças exclusivas' },
            { num: '3', label: 'Anos no asfalto' },
            { num: '20k+', label: 'Clientes satisfeitos' },
            { num: '100%', label: 'Autenticidade garantida' },
          ].map(({ num, label }) => (
            <div key={label} className="sobre__stat">
              <span className="sobre__stat-num">{num}</span>
              <span className="sobre__stat-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="sobre__valores">
          <h3 className="sobre__valores-title">NOSSOS VALORES</h3>
          <div className="sobre__valores-grid">
            {[
              {
                icon: '⚡',
                titulo: 'Autenticidade',
                desc: 'Nenhuma peça falsa. Nenhum estilo forçado. Só o real.',
              },
              {
                icon: '🔥',
                titulo: 'Cultura Urbana',
                desc: 'Enraizados na rua, na música, no grafite e no skate.',
              },
              {
                icon: '🌐',
                titulo: 'Curadoria Global',
                desc: 'Drops internacionais com a pegada local que você entende.',
              },
              {
                icon: '🛡',
                titulo: 'Qualidade Real',
                desc: 'Peças que duram. Que você vai querer usar todos os dias.',
              },
            ].map(({ icon, titulo, desc }) => (
              <div key={titulo} className="valor-card">
                <span className="valor-card__icon">{icon}</span>
                <h4 className="valor-card__titulo">{titulo}</h4>
                <p className="valor-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
