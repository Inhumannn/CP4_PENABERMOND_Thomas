import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <a href="/">
        <h1 className="logo">Kasa</h1>
      </a>
      <nav>
        <ul>
          <li>
            <Button variant="link" style={{ color: "#4b5563" }}>
              <Link to="#">Acceuil</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" style={{ color: "#4b5563" }}>
              <Link to="#">À propos</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" style={{ color: "#4b5563" }}>
              <Link to="#">Contact</Link>
            </Button>
          </li>
        </ul>
        <Menu className="menu"/>
      </nav>
    </header>
  );
}
