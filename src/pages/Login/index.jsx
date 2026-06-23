import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Login() {
  const [modo, setModo] = useState('login') // 'login' | 'cadastro'
  const [form, setForm] = useState({ email: '', senha: '', nome: '' })

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica de autenticação aqui
    alert(modo === 'login' ? 'Login realizado!' : 'Conta criada!')
  }

  return (
    <div className="login">
      <div className="login__bg" aria-hidden="true" />

      <div className="login__card">
        <Link to="/" className="login__brand">ALLSTYLESTORE</Link>

        <div className="login__tabs" role="tablist">
          <button
            role="tab"
            aria-selected={modo === 'login'}
            className={`login__tab ${modo === 'login' ? 'login__tab--ativo' : ''}`}
            onClick={() => setModo('login')}
          >
            Entrar
          </button>
          <button
            role="tab"
            aria-selected={modo === 'cadastro'}
            className={`login__tab ${modo === 'cadastro' ? 'login__tab--ativo' : ''}`}
            onClick={() => setModo('cadastro')}
          >
            Criar conta
          </button>
        </div>

        <div className="login__form">
          {modo === 'cadastro' && (
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
              />
            </div>
          )}

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
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="senha">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={form.senha}
              onChange={handleChange}
            />
          </div>

          {modo === 'login' && (
            <a href="#" className="login__esqueci">Esqueci minha senha</a>
          )}

          <button
            type="button"
            className="login__btn"
            onClick={handleSubmit}
          >
            {modo === 'login' ? 'Entrar' : 'Criar conta'}
          </button>

          <p className="login__toggle">
            {modo === 'login' ? 'Não tem conta?' : 'Já tem conta?'}
            {' '}
            <button
              className="login__toggle-btn"
              onClick={() => setModo(modo === 'login' ? 'cadastro' : 'login')}
            >
              {modo === 'login' ? 'Criar conta' : 'Entrar'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
