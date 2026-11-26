import { useState } from "react";

type Page = "inicio" | "agenda" | "clubes" | "tienda" | "perfil";

const navigation: { id: Page; label: string; icon: string }[] = [
  { id: "inicio", label: "Inicio", icon: "⌂" },
  { id: "agenda", label: "Agenda", icon: "▦" },
  { id: "clubes", label: "Clubes", icon: "◈" },
  { id: "tienda", label: "Tienda", icon: "♧" },
  { id: "perfil", label: "Perfil", icon: "○" },
];

const clubs = [
  { name: "Club del Vino", description: "Regiones, variedades y cultura del vino.", tone: "wine", symbol: "◉" },
  { name: "Club Cervecero", description: "Estilos, elaboración y degustación.", tone: "beer", symbol: "✳" },
  { name: "Club de Parrilleros", description: "Cortes, fuego y cocina al aire libre.", tone: "grill", symbol: "♨" },
];

function App() {
  const [page, setPage] = useState<Page>("inicio");

  const changePage = (next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="wordmark" href="#inicio" onClick={(event) => { event.preventDefault(); changePage("inicio"); }}>
          <span>CLUB SOCIAL</span>
          <small>EXPERIENCIAS QUE NOS REÚNEN</small>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <button key={item.id} className={page === item.id ? "nav-link active" : "nav-link"} onClick={() => changePage(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="account-button" onClick={() => changePage("perfil")}>Mi cuenta</button>
      </header>

      <main className="main-content">
        {page === "inicio" && (
          <>
            <section className="hero">
              <div className="hero-copy">
                <p className="eyebrow">UN LUGAR PARA COMPARTIR LO QUE NOS GUSTA</p>
                <h1>Aprender, descubrir y disfrutar.</h1>
                <p className="hero-description">Experiencias, encuentros y personas que comparten la curiosidad por el buen vivir. Explora nuestros clubes y encuentra tu próxima experiencia.</p>
                <button className="primary-button" onClick={() => changePage("agenda")}>Explorar actividades <span aria-hidden="true">↗</span></button>
              </div>
              <div className="hero-art" role="img" aria-label="Mesa preparada para compartir una experiencia">
                <span>Las mejores experiencias se disfrutan en comunidad.</span>
              </div>
            </section>

            <section className="content-section">
              <div className="section-heading">
                <div><p className="eyebrow">ENCUENTRA TU ESPACIO</p><h2>Explora nuestros clubes</h2></div>
                <button className="text-button" onClick={() => changePage("clubes")}>Ver todos <span aria-hidden="true">→</span></button>
              </div>
              <div className="club-grid">
                {clubs.map((club) => (
                  <button className={`club-card ${club.tone}`} key={club.name} onClick={() => changePage("clubes")}>
                    <span className="club-symbol" aria-hidden="true">{club.symbol}</span>
                    <span className="club-card-title">{club.name}</span>
                    <span className="club-card-description">{club.description}</span>
                    <span className="club-card-link">Explorar club ↗</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="content-section">
              <div className="section-heading">
                <div><p className="eyebrow">RESERVA UN MOMENTO PARA TI</p><h2>Próximas experiencias</h2></div>
                <button className="text-button" onClick={() => changePage("agenda")}>Ir a la agenda <span aria-hidden="true">→</span></button>
              </div>
              <div className="experience-placeholder">
                <span className="placeholder-icon">✳</span>
                <div><strong>Estamos preparando la agenda</strong><p>Pronto encontrarás aquí catas, talleres, cursos y encuentros de nuestros clubes.</p></div>
              </div>
            </section>
          </>
        )}

        {page !== "inicio" && (
          <section className="simple-page">
            <p className="eyebrow">CLUB SOCIAL</p>
            <h1>{navigation.find((item) => item.id === page)?.label}</h1>
            <p>Este espacio se desarrollará en las siguientes etapas del proyecto.</p>
            <button className="secondary-button" onClick={() => changePage("inicio")}>Volver al inicio</button>
          </section>
        )}
      </main>

      <footer className="site-footer">CLUB SOCIAL · EXPERIENCIAS, CONOCIMIENTO Y COMUNIDAD</footer>

      <nav className="mobile-nav" aria-label="Navegación móvil">
        {navigation.map((item) => (
          <button key={item.id} className={page === item.id ? "mobile-nav-item active" : "mobile-nav-item"} onClick={() => changePage(item.id)}>
            <span aria-hidden="true">{item.icon}</span>{item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;