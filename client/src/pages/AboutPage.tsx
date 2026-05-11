import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import fordFiesta from "@assets/img_cars/fordfiesta.jpg";
import daciaLogan from "@assets/img_cars/DaciaLogan.jpg";
import hyundaiAccent from "@assets/img_cars/HyundaiAccent.jpg";

export default function AboutPage() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", "Sedan", "SUV", "Compact", "Hatchback", "Luxuriant"];

  const cars = [
    {
      id: 1,
      title: "Volkswagen Golf",
      category: ["Compact", "Hatchback"],
      image: "https://images.hgmsites.net/med/2024-volkswagen-golf-2-0t-autobahn-dsg-angular-front-exterior-view_100908508_m.webp",
      description: "Perfect pentru lectii in oras",
      link: "#",
    },
    {
      id: 2,
      title: "Skoda Octavia",
      category: ["Sedan", "Compact"],
      image: "https://assets-eu-01.kc-usercontent.com/fb793c58-315a-0196-d3af-7c9c2613d52c/92454e93-dad8-4817-9e0b-b2942299034e/Octavia_hatch_front_vRS_UK.jpg",
      description: "Spatios si confortabil pentru lectii",
      link: "#",
    },
    {
      id: 3,
      title: "Dacia Duster",
      category: ["SUV", "Compact"],
      image: "https://preview.thenewsmarket.com/Previews/NCAP/StillAssets/1920x1080/684670_v2.jpg",
      description: "Bun pentru toate conditile",
      link: "#",
    },
    {
      id: 4,
      title: "BMW Seriea 3",
      category: ["Luxuriant", "Sedan"],
      image: "https://upload.wikimedia.org/wikipedia/commons/5/57/BMW_G20_%282022%29_IMG_7316.jpg",
      description: "Experienta de conducere de lux",
      link: "#",
    },
    {
      id: 5,
      title: "Ford Focus",
      category: ["Compact", "Hatchback"],
      image: "https://www.ford.co.uk/content/dam/guxeu/rhd/central/cars/2021-focus/dse/column-cards/ford-focus-eu-Column_Card_Focus-ST-3x2-1000x667-mean-green-front-view.jpg",
      description: "Usor de manevrat si eficient",
      link: "#",
    },
    {
      id: 6,
      title: "Audi A4",
      category: ["Luxuriant", "Sedan"],
      image: "https://hips.hearstapps.com/hmg-prod/images/2021-audi-a4-45-tfsi-quattro-104-1607927016.jpg?crop=0.450xw:0.380xh;0.226xw,0.399xh&resize=2048:*",
      description: "Moduri de siguranta",
      link: "#",
    },
    {
      id: 7,
      title: "Toyota Corolla",
      category: ["Sedan", "Compact"],
      image: "https://asarauto.com/wp-content/uploads/2021/06/Black-1170x395-1.webp",
      description: "Eficient si fiabil",
      link: "#",
    },
    {
      id: 8,
      title: "Nissan Qashqai",
      category: ["SUV", "Compact"],
      image: "https://www-europe.nissan-cdn.net/content/dam/Nissan/romania/LCC/Qashqai-J12B/J12B/J12B_VEC008_colGAT.png",
      description: "Inaltime perfecta pentru invatare",
      link: "#",
    },
    {
      id: 9,
      title: "Mercedes C-Class",
      category: ["Luxuriant", "Sedan"],
      image: "https://images.netdirector.co.uk/gforces-auto/image/upload/w_412,h_309,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/db50f8bd027fcc727b5ce779c67fbf9c/c_class_color_selector_banners_1.png",
      description: "Vehicul de antrenament de premium",
      link: "#",
    },
        {
      id: 10,
      title: "Ford Fiesta",
      category: ["Compact", "Sedan"],
      image: fordFiesta,
      description: "Vehicul de antrenament de premium",
      link: "#",
    },
        {
      id: 11,
      title: "Dacia Logan",
      category: ["Hatchback", "Sedan"],
      image: daciaLogan,
      description: "Vehicul de antrenament de premium",
      link: "#",
    },
        {
      id: 12,
      title: "Hyundai Accent",
      category: ["Sedan", "Sedan"],
      image: hyundaiAccent,
      description: "Vehicul de antrenament de premium",
      link: "#",
    },
    {
      id: 13,
      title: "Renault Clio",
      category: ["Compact", "Hatchback"],
      image: "https://media.promotor.ro/BiL3dNNGDdiHs_nMAlAT2TdaEFo=/1200x675/smart/filters:contrast(5):format(webp)/https%3A%2F%2Fwww.promotor.ro%2Fwp-content%2Fuploads%2F2025%2F09%2Fnoul-renault-clio-a-fost-lansat-initial-subcompacta-se-remarca-prin-designul-agresiv-galerie-foto-1-scaled.jpg",
      description: "Ușor de manevrat și parcat",
      link: "#",
    },
  ];

  const filteredCars = cars.filter((car) => {
    const matchesCategory = filter === "all" || car.category.includes(filter);
    const matchesSearch =
      searchQuery === "" ||
      car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
        <Navigation />
        <main id="despre">
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="max-w-3xl mb-12">
                <Badge variant="outline" className="mb-4" data-testid="badge-cars">
                  Flota noastră
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Vehicule <span className="text-primary">de Antrenament</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Descopera flota noastra de vehicule de antrenament.
                </p>
              </div>

              <div className="mb-8 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search cars..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                    data-testid="input-search"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={filter === category ? "default" : "outline"}
                      onClick={() => setFilter(category)}
                      className="capitalize"
                      data-testid={`button-filter-${category}`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCars.length > 0 ? (
                  filteredCars.map((car, index) => (
                    <Card
                      key={car.id}
                      className="group overflow-hidden hover-elevate transition-all duration-300"
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                      data-testid={`card-car-${car.id}`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={car.image}
                          alt={car.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                          <Button size="sm" variant="secondary" asChild data-testid={`button-view-${car.id}`}>
                            <a href={car.link} className="flex items-center gap-2 no-underline">
                              View Details
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-3" data-testid={`badge-category-${car.id}`}>
                          {car.category[0]}
                        </Badge>
                        <h3 className="text-xl font-bold mb-2" data-testid={`text-title-${car.id}`}>
                          {car.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{car.description}</p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-16">
                    <p className="text-muted-foreground text-lg">No cars found matching your criteria.</p>
                  </div>
                )}
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
