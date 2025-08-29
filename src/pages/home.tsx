import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <section id="tagline">
          <div>
            <h2>Trouvez votre logement idéal</h2>
            <p>
              Découvrez des hébergements uniques et vivez comme un local <br />{" "}
              partout dans le monde
            </p>
          </div>
        </section>
        <Card />
      </main>
      <Footer />
    </>
  );
}
