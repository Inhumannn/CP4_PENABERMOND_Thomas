import { Link } from "react-router-dom";
import "../styles/pages/404.scss";

export function Custom404() {
  return (
    <main id="notfound">
      <section>
        <div className="notfound-container">
          <h1>
            404 <br /> Page Not Found
          </h1>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <button className="notfound-button">
            <Link to="/">Back To Home</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
