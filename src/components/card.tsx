import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Logement = {
  id: string;
  title: string;
  location: string;
  pictures: string;
  tags: string[];
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  description: string;
  equipments: string[];
};

export function Card() {
  const [logements, setLogements] = useState<Logement[]>([]);
  useEffect(() => {
    fetch("/data/logements.json")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <section id="card-container">
      <div>
        {logements.map((logement) => (
          <Link to={`/detail/${logement.id}`} key={logement.id}>
            <article className="card">
              <div>
                <img src={logement.pictures} alt={logement.title} />
              </div>
              <div>
                <h3>{logement.title}</h3>
                <p>{logement.location}</p>
                <div>
                  {logement.tags.map((tag, i) => (
                    <Badge className="tags" key={i}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div>
                  {[...Array(5)].map((_, j) => (
                    // Tableau itéral -> [...Array(5)]
                    <span key={j}>
                      <Star
                        size={17}
                        fill={j < Number(logement.rating) ? "#facc15" : "none"}
                        stroke="#facc15"
                        className="transition-all"
                      />
                    </span>
                  ))}
                  <span>({logement.rating})</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
