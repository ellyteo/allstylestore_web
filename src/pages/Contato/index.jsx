import { useState } from 'react'
import './style.css'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulação de envio
    setEnviado(true)
  }

  return (
    <div className="contato">
      <div className="contato__header">
        <div className="container">
          <h1 className="contato__title">CONTATO</h1>
          <p className="contato__sub">Fale com a gente. Respondemos rápido.</p>
        </div>
      </div>

      <div className="container contato__body">
        <div className="contato__info">
          <div className="info-block">
            <span className="info-block__label">Telefone</span>
            <a href="tel:+5547999999999" className="info-block__value">
              (47) 99999-9999
            </a>
          </div>
          <div className="info-block">
            <span className="info-block__label">E-mail</span>
            <a href="mailto:allstylestore@gmail.com" className="info-block__value">
              allstylestore@gmail.com
            </a>
          </div>
          <div className="info-block">
            <span className="info-block__label">Instagram</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="info-block__value"
            >
              @allstylestore
            </a>
          </div>
          <div className="info-block">
            <span className="info-block__label">Horário</span>
            <span className="info-block__value">Seg – Sex, 9h às 18h</span>
          </div>
        </div>

        <div className="contato__form-wrap">
          {enviado ? (
            <div className="contato__success">
              <span className="contato__success-icon">✓</span>
              <h3>Mensagem enviada!</h3>
              <p>A gente entra em contato em breve.</p>
              <button
                className="contato__btn"
                onClick={() => { setEnviado(false); setForm({ nome: '', email: '', mensagem: '' }) }}
              >
                Enviar outra
              </button>
            </div>
          ) : (
            <div className="contato__form">
              <div className="form-group">
                <label className="form-label" htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  className="form-input"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  className="form-input form-input--textarea"
                  placeholder="Como podemos ajudar?"
                  rows={5}
                  value={form.mensagem}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="button"
                className="contato__btn"
                onClick={handleSubmit}
                disabled={!form.nome || !form.email || !form.mensagem}
              >
                Enviar mensagem →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
