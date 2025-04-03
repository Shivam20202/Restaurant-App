import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="h-[60vh] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto">A legacy of culinary excellence since 1995</p>
          </motion.div>
        </div>
      </div>

      {/* History Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Heritage</h2>
            <p className="text-gray-600 mb-6">
              Founded by renowned chef Marcus Laurent, Savoria has been at the forefront of culinary innovation for over two decades. Our commitment to excellence and passion for creating extraordinary dining experiences has earned us numerous accolades and a loyal following of food enthusiasts.
            </p>
            <p className="text-gray-600">
              Every dish at Savoria tells a story - a story of tradition, innovation, and the pursuit of perfection. Our team of world-class chefs combines classical techniques with modern creativity to craft unforgettable culinary experiences.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Restaurant interior"
              className="rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Awards Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-gray-600">Celebrating our commitment to excellence</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: "2023", award: "Michelin Star" },
              { year: "2022", award: "Best Fine Dining Restaurant" },
              { year: "2021", award: "Chef of the Year" }
            ].map((award, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <Star className="w-8 h-8 text-red-800 mx-auto mb-4" />
                <h3 className="text-xl font-serif text-gray-900 mb-2">{award.award}</h3>
                <p className="text-gray-600">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600">The culinary artists behind Savoria</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus Laurent",
                role: "Executive Chef",
                image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Sophie Chen",
                role: "Pastry Chef",
                image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "James Wilson",
                role: "Sommelier",
                image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;