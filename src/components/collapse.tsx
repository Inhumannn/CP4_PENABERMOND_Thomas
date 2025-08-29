import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Custom404 } from "@/pages/404";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

export function Collapse() {
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
    <Accordion type="single" collapsible>
      <AccordionItem value="desc">
        <AccordionTrigger>
          <p>Description</p>
        </AccordionTrigger>
        <AccordionContent>
          <span>{logement.description}</span>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="equip">
        <AccordionTrigger>
          <p>Équipements</p>
        </AccordionTrigger>
        <AccordionContent>
          <ul>
            {logement.equipments.map((eq, i) => (
              <li key={i}>{eq}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
