import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import Golan from "@assets/img_cars/DaciaLogan.jpg";
import Fiesta from "@assets/img_cars/fordfiesta.jpg";
import Automata from "@assets/img_cars/HyundaiAccent.jpg";

export default function Pricing() {
  const packages = [
    {
      name: "Ford Fiesta",
      price: "2.500",
      description: "Ideal pentru începători",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "Cutie manuală",
        "Benzina",
        "1 examen simulator"
      ],
      recommended: false,
      image: Fiesta
    },
    {
      name: "Dacia Logan",
      price: "2.500",
      description: "Cel mai popular pachet",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "Cutie manuală",
        "Diesel",
        "3 examene simulator",
        "Asistență la examen"
      ],
      recommended: true,
      image: Golan
    },
    {
      name: "Hyundai Accent",
      price: "2.500",
      description: "Pentru cei care vor siguranță maximă",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu ",
        "Cutie automată",
        "Examene simulator nelimitate",
        "Asistență la examen"
      ],
      recommended: false,
      image: Automata
    }
  ];

  return (
    <section id="tarife" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Masini disponibile
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fără costuri ascunse. Alege masina potrivita pentru tine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`p-6 md:p-8 flex flex-col relative hover-elevate transition-all ${
                pkg.recommended ? "border-primary border-2" : ""
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="default" className="px-4 py-1">
                    Recomandat
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {pkg.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground">RON</span>
                </div>
              </div>

              {/* Car photo placeholder */}
              /<div className="mb-6 aspect-video w-full rounded-xl bg-muted overflow-hidden">
                <img
                  src={pkg.image || "/attached_assets/img_cars/DaciaLogan.jpg"}
                  alt={`Fotografie ${pkg.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={pkg.recommended ? "default" : "outline"}
                className="w-full"
                onClick={() => {
                  const params = new URLSearchParams(window.location.search);
                  const carValue = pkg.name === "Sandero Stepway" ? "Dacia Stepway" : pkg.name;
                  params.set("car", carValue);
                  const newUrl = `${window.location.pathname}?${params.toString()}#contact`;
                  window.history.pushState({}, "", newUrl);
                  window.dispatchEvent(new HashChangeEvent("hashchange"));

                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid={`button-package-${index}`}
              >
                Alege Pachetul
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            * Prețurile sunt orientative și pot varia în funcție de locație și perioada selectată.
          </p>
          <Button asChild size="lg" className="px-8">
            <a href="/pricelist" className="no-underline">
              Vezi Toate Mașinile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
