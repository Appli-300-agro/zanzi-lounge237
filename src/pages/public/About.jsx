import React from 'react';
import { Target, Lightbulb, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-dark mb-6">À Propos de Zanzibar Resort</h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            Situé au cœur de Bonamoussadi à Douala, Zanzibar Resort est votre destination privilégiée alliant 
            hébergement de standing, gastronomie raffinée et loisirs complets dans un cadre unique.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">Notre Concept</h2>
            <p className="text-secondary leading-relaxed">
              Zanzibar Resort est né de la volonté de créer un véritable complexe "tout-en-un" à Douala. Notre mission est d'offrir une expérience 
              complète à nos convives, où le confort de nos chambres rencontre l'excellence de notre table et le dynamisme de nos espaces de loisirs. 
              Que ce soit pour un séjour relaxant, un déjeuner d'affaires ou une célébration mémorable, nous garantissons un service 
              premium disponible 24h/24 dans un cadre moderne et sécurisé face à TotalEnergies 2.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <Target className="text-primary h-8 w-8" />
                <h4 className="font-bold">Polyvalence</h4>
                <p className="text-xs text-secondary">Hôtel, Restaurant, Piscine, Billard : tout au même endroit.</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="text-primary h-8 w-8" />
                <h4 className="font-bold">Disponibilité</h4>
                <p className="text-xs text-secondary">Un service d'accueil et de restauration disponible 24h/24.</p>
              </div>
            </div>
          </div>
          <div className="bg-primary/5 rounded-3xl p-8 border-2 border-primary/10 border-dashed">
            <h3 className="text-xl font-bold mb-6 text-secondary-dark">L'Expérience Tout-en-Un</h3>
            <ul className="grid grid-cols-1 gap-3">
              {[
                "Hébergement en Chambres de Standing",
                "Restaurant Gastronomique & Buffet",
                "Barbecue & Grillades en plein air",
                "Piscine Extérieure & Cabanas",
                "Espace Billard & Divertissement",
                "Salle de Fête & Événementiel",
                "Service Traiteur Professionnel",
                "Parking Sécurisé & Wi-Fi Haut Débit"
              ].map(item => (
                <li key={item} className="flex items-center text-sm text-secondary font-medium">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mb-10 text-center bg-primary p-16 rounded-[2rem] text-white">
        <h2 className="text-3xl font-bold mb-6">Prêt pour une expérience Zanzibar Resort ?</h2>
        <p className="text-primary-light mb-8 max-w-2xl mx-auto">
          Que vous soyez de passage à Douala ou résident à Bonamoussadi, 
          nous sommes prêts à vous accueillir à tout moment (24h/24).
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
          Réserver votre séjour
        </button>
      </section>
    </div>
  );
};

export default About;
