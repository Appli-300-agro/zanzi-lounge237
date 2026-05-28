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
            Situé au cœur de Bastos, Zanzibar Resort (Zanzi) est bien plus qu'un lounge : c'est un complexe de loisirs 
            d'exception alliant luxe tropical, gastronomie raffinée et une piscine centrale unique à Yaoundé.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">Notre Concept</h2>
            <p className="text-secondary leading-relaxed">
              Zanzibar Resort est né de la volonté de créer un véritable oasis urbain à Yaoundé. Notre mission est d'offrir une évasion totale 
              à nos convives, où le confort des cabanas au bord de la piscine rencontre l'excellence de notre table gastronomique. 
              Que ce soit pour un brunch dominical en famille ou une pool party exclusive entre amis, nous garantissons un service 
              VIP dans un cadre chic et sécurisé.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <Target className="text-primary h-8 w-8" />
                <h4 className="font-bold">Luxe Tropical</h4>
                <p className="text-xs text-secondary">Une esthétique soignée pour un dépaysement garanti à Bastos.</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="text-primary h-8 w-8" />
                <h4 className="font-bold">Exclusivité</h4>
                <p className="text-xs text-secondary">Un service premium et une ambiance feutrée pour une clientèle exigeante.</p>
              </div>
            </div>
          </div>
          <div className="bg-primary/5 rounded-3xl p-8 border-2 border-primary/10 border-dashed">
            <h3 className="text-xl font-bold mb-6 text-secondary-dark">L'Expérience Resort</h3>
            <ul className="grid grid-cols-1 gap-3">
              {[
                "Piscine Centrale & Cabanas Privatisables",
                "Restauration Gastronomique (Cuisine Fusion)",
                "Lounge Bar & Mixologie de Prestige",
                "Pool Parties & Événements Thématiques",
                "Sunday Brunch & Détente en Famille",
                "Espace VIP & Salons climatisés",
                "Musique Live & DJ Sets Internationaux",
                "Organisation d'Anniversaires & Mariages"
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
        <h2 className="text-3xl font-bold mb-6">Envie de vivre l'expérience Zanzi Lounge ?</h2>
        <p className="text-primary-light mb-8 max-w-2xl mx-auto">
          Que ce soit pour un cocktail raffiné, un dîner gastronomique ou une soirée animée à Bastos, 
          nous sommes prêts à vous accueillir.
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
          Réserver une table
        </button>
      </section>
    </div>
  );
};

export default About;
