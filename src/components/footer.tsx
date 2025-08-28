import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div>
            <h2>À propos de Kasa</h2>
            <ul>
              <li>
                <Button
                  variant="link"
                  style={{ color: "#D1D5DB", padding: "12px 12px 12px 0px" }}
                >
                  <Link to="#">Notre histoire</Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  style={{ color: "#D1D5DB", padding: "12px 12px 12px 0px" }}
                >
                  <Link to="#">Equipe</Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  style={{ color: "#D1D5DB", padding: "12px 12px 12px 0px" }}
                >
                  <Link to="#">Carrière</Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  style={{ color: "#D1D5DB", padding: "12px 12px 12px 0px" }}
                >
                  <Link to="#">Presse</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h2>Support</h2>
            <ul>
              <li>
                <Button
                  variant="link"
                  style={{ color: "#D1D5DB", padding: "12px 12px 12px 0px" }}
                >
                  <Link to="#">Centre d'aide</Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  style={{ color: "#D1D5DB", padding: "12px 12px 12px 0px" }}
                >
                  <Link to="#">Nous contacter</Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  style={{ color: "#D1D5DB", padding: "12px 12px 12px 0px" }}
                >
                  <Link to="#">Signaler un problème</Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  style={{ color: "#D1D5DB", padding: "12px 12px 12px 0px" }}
                >
                  <Link to="#">Page 404</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h2>Légal</h2>
            <ul>
              <li>
                <Button
                  variant="link"
                  style={{ color: "#D1D5DB", padding: "12px 12px 12px 0px" }}
                >
                  <Link to="#">Conditions d'utilisation</Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  style={{ color: "#D1D5DB", padding: "12px 12px 12px 0px" }}
                >
                  <Link to="#">Politique de confidentialité</Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  style={{ color: "#D1D5DB", padding: "12px 12px 12px 0px" }}
                >
                  <Link to="#">Mentions légales</Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  style={{ color: "#D1D5DB", padding: "12px 12px 12px 0px" }}
                >
                  <Link to="#">Cookies</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Separator orientation="vertical" />
          <p>© 2024 Kasa. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
