import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import fordFiesta from "@assets/img_cars/fordfiesta.jpg";
import daciaLogan from "@assets/img_cars/DaciaLogan.jpg";
import hyundaiAccent from "@assets/img_cars/HyundaiAccent.jpg";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function PriceList() {
  const packages = [
    {
      name: "Volkswagen Golf",
      price: "2.800",
      description: "Perfect pentru condus urban",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "Cutie manuală",
        "Benzină",
        "2 examene simulator",
        "Asistență la examen"
      ],
      recommended: false,
      image: "https://images.hgmsites.net/med/2024-volkswagen-golf-2-0t-autobahn-dsg-angular-front-exterior-view_100908508_m.webp"
    },
    {
      name: "Skoda Octavia",
      price: "2.900",
      description: "Spațios și confortabil",
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
      image: "https://assets-eu-01.kc-usercontent.com/fb793c58-315a-0196-d3af-7c9c2613d52c/92454e93-dad8-4817-9e0b-b2942299034e/Octavia_hatch_front_vRS_UK.jpg"
    },
    {
      name: "Dacia Duster",
      price: "2.600",
      description: "Ideal pentru toate drumurile",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "Cutie manuală",
        "Benzină",
        "2 examene simulator",
        "Asistență la examen"
      ],
      recommended: false,
      image: "https://preview.thenewsmarket.com/Previews/NCAP/StillAssets/1920x1080/684670_v2.jpg"
    },
    {
      name: "BMW Seriea 3",
      price: "3.500",
      description: "Experiență premium",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "Cutie automată",
        "Benzină",
        "Examene simulator nelimitate",
        "Asistență la examen",
        "Instruire personalizată"
      ],
      recommended: false,
      image: "https://upload.wikimedia.org/wikipedia/commons/5/57/BMW_G20_%282022%29_IMG_7316.jpg"
    },
    {
      name: "Ford Focus",
      price: "2.400",
      description: "Eficient și manevrabil",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "Cutie manuală",
        "Benzină",
        "2 examene simulator",
        "Asistență la examen"
      ],
      recommended: false,
      image: "https://www.ford.co.uk/content/dam/guxeu/rhd/central/cars/2021-focus/dse/column-cards/ford-focus-eu-Column_Card_Focus-ST-3x2-1000x667-mean-green-front-view.jpg"
    },
    {
      name: "Audi A4",
      price: "3.200",
      description: "Tehnologie și siguranță",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "Cutie automată",
        "Diesel",
        "Examene simulator nelimitate",
        "Asistență la examen",
        "Sisteme avansate de siguranță"
      ],
      recommended: false,
      image: "https://hips.hearstapps.com/hmg-prod/images/2021-audi-a4-45-tfsi-quattro-104-1607927016.jpg?crop=0.450xw:0.380xh;0.226xw,0.399xh&resize=2048:*"
    },
    {
      name: "Toyota Corolla",
      price: "2.500",
      description: "Fiabil și economic",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "Cutie manuală",
        "Hibrid",
        "3 examene simulator",
        "Asistență la examen"
      ],
      recommended: false,
      image: "https://asarauto.com/wp-content/uploads/2021/06/Black-1170x395-1.webp"
    },
    {
      name: "Nissan Qashqai",
      price: "2.700",
      description: "SUV compact versatil",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "Cutie manuală",
        "Benzină",
        "2 examene simulator",
        "Asistență la examen"
      ],
      recommended: false,
      image: "https://www-europe.nissan-cdn.net/content/dam/Nissan/romania/LCC/Qashqai-J12B/J12B/J12B_VEC008_colGAT.png"
    },
    {
      name: "Mercedes C-Class",
      price: "3.800",
      description: "Lux și performanță",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "Cutie automată",
        "Benzină",
        "Examene simulator nelimitate",
        "Asistență la examen",
        "Instruire premium"
      ],
      recommended: true,
      image: "https://images.netdirector.co.uk/gforces-auto/image/upload/w_412,h_309,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/db50f8bd027fcc727b5ce779c67fbf9c/c_class_color_selector_banners_1.png"
    },
    {
      name: "Ford Fiesta",
      price: "2.500",
      description: "Ideal pentru începători",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "Cutie manuală",
        "Benzină",
        "1 examen simulator",
        "Asistență la examen"
      ],
      recommended: false,
      image: fordFiesta
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
      image: daciaLogan
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
      image: hyundaiAccent
    },
    {
      name: "Renault Clio",
      price: "2.300",
      description: "Compact și economic",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "Cutie manuală",
        "Benzină",
        "2 examene simulator",
        "Asistență la examen"
      ],
      recommended: false,
      image: "https://media.promotor.ro/BiL3dNNGDdiHs_nMAlAT2TdaEFo=/1200x675/smart/filters:contrast(5):format(webp)/https%3A%2F%2Fwww.promotor.ro%2Fwp-content%2Fuploads%2F2025%2F09%2Fnoul-renault-clio-a-fost-lansat-initial-subcompacta-se-remarca-prin-designul-agresiv-galerie-foto-1-scaled.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="pricelist">
        <section className="py-12 md:py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Lista Prețuri Toate Mașinile
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Alege mașina perfectă pentru nevoile tale. Fără costuri ascunse.
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

                  {/* Car photo */}
                  <div className="mb-6 aspect-video w-full rounded-xl bg-muted overflow-hidden">
                    <img
                      src={pkg.image}
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
                      params.set("car", pkg.name);
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
              <p className="text-sm text-muted-foreground">
                * Prețurile sunt orientative și pot varia în funcție de locație și perioada selectată.
              </p>
            </div>
          </div>
        </section>
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}
