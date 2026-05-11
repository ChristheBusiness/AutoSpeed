import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Car, Trophy } from "lucide-react";
import img1 from "@assets/cursanti/n_1.jpg";
import img2 from "@assets/cursanti/n_2.jpg";
import img3 from "@assets/cursanti/n_3.jpg";
import img4 from "@assets/cursanti/n_4.jpg";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Instructori Certificați",
      description: "Echipa noastră este formată din instructori autorizați cu experiență vastă în predare"
    },
    {
      icon: Car,
      title: "Flotă Modernă",
      description: "Mașini noi și bine întreținute, echipate cu sisteme de siguranță avansate"
    },
    {
      icon: Trophy,
      title: "Rată Mare de Promovare",
      description: "92% dintre elevii noștri promovează examenul din prima încercare"
    }
  ];

  return (
    <section id="despre" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Despre Scoala de soferi Auto Speed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Școala ta de încredere pentru obținerea permisului de conducere
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Cu peste 5 ani de experiență în domeniul educației rutiere, <strong>Scoala de soferi Auto Speed</strong> este alegerea perfectă pentru cei care doresc să învețe să conducă într-un mediu sigur și profesional.
            </p>
            
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Ne mândrim cu o echipă de instructori dedicați, pacienți și profesionisti care își doresc să transmită elevilor cunoștințele necesare pentru a deveni șoferi responsabili și încrezători.
            </p>

            <div className="space-y-3">
              {[
                "Program flexibil, adaptat nevoilor tale",
                "Prețuri transparente, fără costuri ascunse",
                "Suport complet până la obținerea permisului"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[img1, img2, img3, img4].map((src, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-xl bg-muted overflow-hidden"
              >
                <img src={src} alt={`Cursant ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 md:p-8 hover-elevate transition-all">
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="px-8">
            <a href="/despre" className="no-underline">
              Despre Noi
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
