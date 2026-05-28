// Catalogue de 100 produits pour zanzi.lounge237
// Images sélectionnées pour leur haute qualité et leur pertinence

const CATEGORY_IMAGES = {
  'Restaurant & Buffet': ['https://images.unsplash.com/photo-1504674900247-0877df9cc836','https://images.unsplash.com/photo-1555939594-58d7cb561ad1','https://images.unsplash.com/photo-1604329760661-e71dc83f8f26'],
  'Barbecue & Grill': ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1','https://images.unsplash.com/photo-1529193591184-b1d58069ecdd','https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b'],
  'Piscine & Détente': ['https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7','https://images.unsplash.com/photo-1540541338287-41700207def5','https://images.unsplash.com/photo-1510812431401-41d2bd2722f3'],
  'Salle de Fête & Event': ['https://images.unsplash.com/photo-1519167758481-83f550bb49b3','https://images.unsplash.com/photo-1470337458703-46ad1756a187','https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b'],
  'Billard & Divertissement': ['https://images.unsplash.com/photo-1544145945-f90425340c7e','https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd','https://images.unsplash.com/photo-1497515114629-f71d768fd07c'],
  'Chambres & Confort': ['https://images.unsplash.com/photo-1566073771259-6a8506099945','https://images.unsplash.com/photo-1520250497591-112f2f40a3f4','https://images.unsplash.com/photo-1582719478250-c89cae4df85b']
};

const DISH_NAMES = {
  'Restaurant & Buffet': ['Ndolé Royal', 'Eru Prestige', 'Couscous Sauce Gombo', 'Riz Sauté Spécial', 'Buffet à Volonté'],
  'Barbecue & Grill': ['Poisson Braisé du Jour', 'Poulet Braisé Maison', 'Brochettes de Bœuf', 'Saucisses Grillées', 'Ailerons BBQ'],
  'Piscine & Détente': ['Accès Piscine Journée', 'Pass Famille Piscine', 'Cocktail Bord de l\'eau', 'Cabana VIP', 'Brunch Piscine'],
  'Salle de Fête & Event': ['Location Salle Mariage', 'Espace Anniversaire', 'Salle de Conférence', 'Pack Décoration VIP', 'Service Traiteur Event'],
  'Billard & Divertissement': ['Partie de Billard', 'Abonnement Club Billard', 'Table VIP Billard', 'Cocktail Games', 'Soirée Divertissement'],
  'Chambres & Confort': ['Chambre Standard Confort', 'Suite Junior Prestige', 'Chambre Deluxe Vue Piscine', 'Appartement de Standing', 'Pack Escapade Romantique']
};
const sectorKeys = Object.keys(DISH_NAMES);

const generateProducts = () => {
  const products = [];
  for (let i = 1; i <= 100; i++) {
    const sector = sectorKeys[i % sectorKeys.length];
    const names = DISH_NAMES[sector];
    const images = CATEGORY_IMAGES[sector];
    const dishBaseName = names[i % names.length];
    const imageUrl = images[i % images.length];
    const productName = `${dishBaseName} ${i > names.length ? '#' + i : ''}`.trim();

    products.push({
      id: `prod-${i}`,
      name: productName,
      description: `Découvrez notre service ${dishBaseName}, une expérience de la catégorie ${sector} proposée par Zanzibar Resort à Bastos.`,
      price: 5000 + (Math.floor(Math.random() * 50) * 1000),
      category: sector,
      imageUrl: `${imageUrl}?auto=format&fit=crop&q=80&w=800`,
      stock: Math.floor(Math.random() * 10) + 1,
      featured: i % 15 === 0
    });
  }
  return products;
};

export const MOCK_PRODUCTS = generateProducts();
export const CATEGORIES = sectorKeys;

export const MOCK_DELIVERERS = [
  { id: 'dev-1', name: 'Abdoulaye', phone: '+237 670 00 00 01', zone: 'Douala (Akwa/Deido)' },
  { id: 'dev-2', name: 'Samuel', phone: '+237 690 00 00 02', zone: 'Yaoundé (Bastos/Mvan)' },
  { id: 'dev-3', name: 'Christian', phone: '+237 650 00 00 03', zone: 'Douala (Bonapriso/Logbessou)' }
];

export const MOCK_USERS_LIST = [
  { id: 'u1', name: 'Jean Dupont', email: 'jean.dupont@email.com', role: 'user', status: 'Actif', joinDate: '12/01/2026' },
  { id: 'u2', name: 'Marie Sissoko', email: 'marie.s@email.com', role: 'user', status: 'Actif', joinDate: '15/01/2026' },
  { id: 'u3', name: 'Aubry Admin', email: 'admin@assequip.cm', role: 'admin', status: 'Actif', joinDate: '01/01/2026' },
  { id: 'u4', name: 'Alain Kotto', email: 'alain.k@email.com', role: 'user', status: 'Inactif', joinDate: '20/01/2026' },
  { id: 'u5', name: 'Inès Kamga', email: 'ines.k@email.com', role: 'user', status: 'Actif', joinDate: '02/02/2026' },
];

export const MOCK_ORDERS = [
  {
    id: 'ORD-2026-001',
    customer: 'Jean Dupont',
    date: '2026-02-04',
    total: 450000,
    status: 'En préparation',
    items: [{ name: 'Prestation Traiteur Prestige', quantity: 1, price: 450000 }]
  },
  {
    id: 'ORD-2026-002',
    customer: 'Marie Sissoko',
    date: '2026-02-03',
    total: 125000,
    status: 'Livré',
    items: [{ name: 'Menu Dégustation Signature', quantity: 1, price: 125000 }]
  }
];
