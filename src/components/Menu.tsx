import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const menuItems = {
  starters: [
    {
      id: 1,
      name: "Truffle-Infused Wild Mushroom Soup",
      description: "Creamy blend of forest mushrooms with black truffle shavings",
      price: 18,
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Pan-Seared Scallops",
      description: "Fresh sea scallops with cauliflower purée and crispy pancetta",
      price: 24,
      image: "https://images.unsplash.com/photo-1599021456807-9f98e78500c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Artisanal Cheese Board",
      description: "Selection of aged cheeses with honey, nuts, and artisanal bread",
      price: 22,
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Citrus-Cured Salmon",
      description: "House-cured salmon with dill, capers, and rye crostini",
      price: 20,
      image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ],
  mainCourse: [
    {
      id: 5,
      name: "Aged Prime Ribeye",
      description: "45-day dry-aged beef with roasted bone marrow and red wine jus",
      price: 58,
      image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Pan-Roasted Duck Breast",
      description: "Maple-glazed duck with wild mushroom risotto and cherry reduction",
      price: 42,
      image: "https://images.unsplash.com/photo-1564436872-f6d81182df12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      name: "Chilean Sea Bass",
      description: "Miso-glazed sea bass with baby bok choy and ginger-scallion sauce",
      price: 48,
      image: "https://images.unsplash.com/photo-1534043464124-3be32fe000c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      name: "Truffle Risotto",
      description: "Carnaroli rice with black truffle, aged parmesan, and wild mushrooms",
      price: 38,
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ],
  desserts: [
    {
      id: 9,
      name: "Dark Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla bean ice cream",
      price: 16,
      image: "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      name: "Crème Brûlée",
      description: "Classic vanilla bean crème brûlée with fresh berries",
      price: 14,
      image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      name: "Tiramisu",
      description: "Traditional Italian tiramisu with mascarpone and coffee",
      price: 15,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 12,
      name: "Passion Fruit Pavlova",
      description: "Crisp meringue with passion fruit curd and fresh cream",
      price: 15,
      image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ],
  beverages: [
    {
      id: 13,
      name: "Signature Martini",
      description: "House-infused gin with dry vermouth and olive",
      price: 16,
      image: "https://images.unsplash.com/photo-1575023782549-62ca0d244b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 14,
      name: "Aged Negroni",
      description: "Barrel-aged negroni with artisanal gin and vermouth",
      price: 18,
      image: "https://images.unsplash.com/photo-1527761939622-9119094630cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 15,
      name: "Vintage Wine Selection",
      description: "Curated selection of old-world wines",
      price: 22,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 16,
      name: "Artisanal Mocktail",
      description: "House-made botanical blend with fresh citrus",
      price: 12,
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ]
};

const MenuSection = ({ title, items }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-16 relative"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-amber-900 mb-2">{title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-red-800 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-amber-50 to-red-50 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl border border-amber-100"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-amber-900 mb-2">{item.name}</h3>
              <p className="text-gray-700 text-sm mb-4 min-h-[48px]">{item.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-red-800 font-semibold text-lg">${item.price}</p>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-600 to-red-800 opacity-10"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Menu = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-fixed bg-cover bg-center">
      <div className="bg-gradient-to-br from-white/95 to-amber-50/95 backdrop-blur-sm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">Our Menu</h1>
            <p className="text-xl text-gray-700">Culinary excellence crafted with passion</p>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-red-800 mx-auto mt-6"></div>
          </motion.div>

          <div className="space-y-16">
            <MenuSection title="Starters" items={menuItems.starters} />
            <MenuSection title="Main Course" items={menuItems.mainCourse} />
            <MenuSection title="Desserts" items={menuItems.desserts} />
            <MenuSection title="Beverages" items={menuItems.beverages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;