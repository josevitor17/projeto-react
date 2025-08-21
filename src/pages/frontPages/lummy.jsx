import "./landing.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button"; 
import oculos1 from "../../assets/oculos-moderno-1.jpg";
import oculos2 from "../../assets/oculos-moderno-2.jpg";
import oculos3 from "../../assets/oculos-moderno-3.jpg";
import cliente1 from "../../assets/cliente-sorrindo-1.jpg";
import cliente2 from "../../assets/cliente-sorrindo-2.jpg";

export default function Landing(){
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Navbar fixa */}
      <nav className="navbar">
        <div className="navbar-logo">
        
        </div>
        <ul className="navbar-links">
          <li><a href="#about">SOBRE</a></li>
          <li><a href="#products">PRODUTOS</a></li>
          <li><a href="#services">SERVIÇOS</a></li>
        </ul>
      </nav>

      {/* Header */}
      <header className="site-header">
        <h1>Lummy</h1>
        <p>Visão clara, estilo único. Cadastre no nosso site e ganhe um exame grátis.</p>
        <Button onClick={() => navigate("/home")} className="cta-button">
          Cadastre-se agora
        </Button>
      </header>

      {/* Sobre Nós */}
      <section id="about" className="about">
        <h2>Sobre Nós</h2>
        <p>Somos especializados em oferecer óculos modernos, lentes de alta qualidade e atendimento personalizado.</p>
        <ul>
          <li>
            <span className="icon">👓</span>
            <span>Óculos Modernos</span>
          </li>
          <li>
            <span className="icon">🩺</span>
            <span>Exames de Visão</span>
          </li>
          <li>
            <span className="icon">🌞</span>
            <span>Lentes de Sol</span>
          </li>
          <li>
            <span className="icon">💎</span>
            <span>Qualidade Premium</span>
          </li>
        </ul>
      </section>

      {/* Produtos */}
      <section id="products" className="products">
        <h2>Produtos</h2>
        <div className="product-list">
          {[oculos1, oculos2, oculos3].map((img, i) => (
            <article key={i} className="product-card">
              <img src={img} alt={`Óculos Modelo ${i+1}`} className="product-image" />
              <div className="product-info">
                <h3>Óculos Modelo {i+1}</h3>
                <p>Estilo moderno e confortável.</p>
                <p className="price">R$ {199 + i * 50},00</p>
                <Button onClick={() => navigate("/home")}>Comprar</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section id="services" className="services">
        <h2>Nossos Serviços</h2>
        <div className="service-list">
          <div className="service-card">
            <span className="icon">🩺</span>
            <h3>Exame de Visão</h3>
            <p>Avaliação oftalmológica completa para garantir sua saúde visual.</p>
          </div>
          <div className="service-card">
            <span className="icon">👓</span>
            <h3>Venda de Óculos</h3>
            <p>Modelos modernos e confortáveis para todos os estilos.</p>
          </div>
          <div className="service-card">
            <span className="icon">🔧</span>
            <h3>Manutenção</h3>
            <p>Ajustes, consertos e limpeza de armações e lentes.</p>
          </div>
          <div className="service-card">
            <span className="icon">🌞</span>
            <h3>Lentes de Sol</h3>
            <p>Proteção contra raios UV com estilo e qualidade.</p>
          </div>
          <div className="service-card">
            <span className="icon">👓</span>
            <h3>Troca de Lentes</h3>
            <p>Substituímos suas lentes mantendo sua armação preferida.</p>
          </div>
          <div className="service-card">
            <span className="icon">👩‍💻</span>
            <h3>Atendimento Personalizado</h3>
            <p>Suporte especializado para escolher a melhor opção.</p>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="clients">
        <h2>Clientes Satisfeitos</h2>
        <div className="client-list">
          <img src={cliente1} alt="Cliente 1" className="client-image" />
          <img src={cliente2} alt="Cliente 2" className="client-image" />
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-contact">
          <h2>Contato</h2>
          <ul>
            <li>📞 (11) 99999-9999</li>
            <li>✉️ contato@lummy.com.br</li>
            <li>💬 WhatsApp: (11) 98888-8888</li>
          </ul>
        </div>

        <div className="footer-map">
          <h2>Visite-nos</h2>
          <iframe
            src="https://www.google.com/maps?q=Rua+Antolin+Garcia+19,+São+Paulo,+SP&output=embed"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

         <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#aaa', marginTop: '20px' }}>
    &copy; 2025 José Vitor. Todos os direitos reservados.
  </p>
      </footer>
    </div>
  );
}
