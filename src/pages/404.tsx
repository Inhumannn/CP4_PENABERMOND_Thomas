import { Link } from "react-router-dom";

export function Custom404() {
  return (
    <main id="notfound">
      <section>
        <div className="notfound-container">
          <h1>404</h1>
          <h2>Page non trouvé</h2>
          <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
          <button className="notfound-button">
            <Link to="/">Revenir à la page home</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
