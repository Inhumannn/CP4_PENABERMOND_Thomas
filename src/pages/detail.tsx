import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Carousel } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/pages/detail.scss";
import { Custom404 } from "./404";

type Logement = {
  id: string;
  title: string;
  location: string;
  pictures: string[];
  tags: string[];
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  description: string;
  equipments: string[];
};

export function Detail() {
  const { id } = useParams<{ id: string }>();
  const [logement, setLogement] = useState<Logement | null>(null);

  useEffect(() => {
    fetch("/data/logements.json")
      .then((response) => response.json())
      .then((data: Logement[]) => {
        const found = data.find((l) => l.id === id);
        setLogement(found || null);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!logement) {
    return <Custom404 />;
  }

  return (
    <>
      <Header />
      <main id="detail">
        <section>
          <Carousel />
          <div>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>
          <div>
            {logement.tags.map((tag, index) => (
              <Badge key={index} className="tags">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="profil">
            <Avatar>
              <AvatarImage
                src={logement.host.picture}
                alt={logement.host.name}
              />
              <AvatarFallback>{logement.host.name}</AvatarFallback>
            </Avatar>
            <div className="profil-detail">
              <h3>{logement.host.name}</h3>
              <p>{logement.location}</p>
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="desc">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{logement.description}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="equip">
                <AccordionTrigger>Équipements</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {logement.equipments.map((eq, i) => (
                      <li key={i}>{eq}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
