import './style.css';
 
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-topline">
          <span className="footer-label">Siga nossa vibe</span>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="YouTube">YT</a>
            <a href="#" aria-label="WhatsApp">WA</a>
            <a href="#" aria-label="X">X</a>
          </div>
        </div>
 
        <div className="footer-columns">
          <div className="footer-column">
            <h2>Faça parte da nossa família</h2>
            <p>Inscreva-se para acesso exclusivo a lançamentos e promoções.</p>
          </div>
          <div className="footer-column">
            <h2>Institucional</h2>
            <nav>
              <a href="#sobre">Sobre</a>
              <a href="#revenda">Revenda</a>
            </nav>
          </div>
          <div className="footer-column">
            <h2>Atendimento ao cliente</h2>
            <nav>
              <a href="#privacidade">Política de privacidade</a>
              <a href="#duvidas">Dúvidas</a>
            </nav>
          </div>
          <div className="footer-column">
            <h2>Minha conta</h2>
            <nav>
              <a href="#conta">Minha conta</a>
              <a href="#carrinho">Carrinho</a>
            </nav>
          </div>
          <div className="footer-column">
            <h2>Fale conosco</h2>
            <p>Tel: (47) 99999-9999</p>
            <p>E-mail: allstylestore@gmail.com</p>
          </div>
        </div>
 
        <div className="footer-divider"></div>
        <p className="footer-credit">www.allstylestore.com</p>
      </div>
    </footer>
  );
}
 