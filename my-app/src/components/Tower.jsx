import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TowerSelector from './TowerSelector';
import ApartmentDetail from './ApartmentDetail';
import ApartmentList from './ApartmentList';
import FloorSelector from './FloorSelector';

import emily from '../assets/emily.webp';
import envy from '../assets/envy.webp';
import outside from '../assets/outside.webp';
import robert from '../assets/robert.webp';

import one from '../assets/one.webp';
import two from '../assets/two.webp';
import three from '../assets/three.webp';
import four from '../assets/four.webp';
import five from '../assets/five.webp';
import six from '../assets/six.webp';
import seven from '../assets/seven.webp';
import eight from '../assets/eight.webp';
import nine from '../assets/nine.webp';
import ten from '../assets/ten.webp';
import eleven from '../assets/eleven.webp';
import twelve from '../assets/twelve.webp';

const Tower = () => {
  const towers = ['Tower A', 'Tower B', 'Tower C'];
  const floors = Array.from({ length: 15 }, (_, i) => `Floor ${15 - i}`);

  const apartments = [
    {
      id: 1,
      image: emily,
      area: "1200 sqft",
      type: "2BHK",
      rooms: "2 Bed, 1 Kitchen",
      gallery: [ten, eleven, twelve],
    },
    {
      id: 2,
      image: envy,
      area: "1500 sqft",
      type: "3BHK",
      rooms: "3 Bed, 1 Kitchen",
      gallery: [seven, eight, nine],
    },
    {
      id: 3,
      image: outside,
      area: "900 sqft",
      type: "1BHK",
      rooms: "1 Bed, 1 Kitchen",
      gallery: [four, five, six],
    },
    {
      id: 4,
      image: robert,
      area: "1100 sqft",
      type: "2BHK",
      rooms: "2 Bed, 1 Kitchen",
      gallery: [one, two, three],
    },
  ];

  // 🧠 Persistent State
  const [selectedTower, setTower] = useState(() => localStorage.getItem('selectedTower'));
  const [selectedFloor, setFloor] = useState(() => localStorage.getItem('selectedFloor'));
  const [selectedApartment, setApartment] = useState(() => {
    const saved = localStorage.getItem('selectedApartment');
    return saved ? JSON.parse(saved) : null;
  });

  // 💾 Save Selection
  useEffect(() => {
    selectedTower
      ? localStorage.setItem('selectedTower', selectedTower)
      : localStorage.removeItem('selectedTower');
  }, [selectedTower]);

  useEffect(() => {
    selectedFloor
      ? localStorage.setItem('selectedFloor', selectedFloor)
      : localStorage.removeItem('selectedFloor');
  }, [selectedFloor]);

  useEffect(() => {
    selectedApartment
      ? localStorage.setItem('selectedApartment', JSON.stringify(selectedApartment))
      : localStorage.removeItem('selectedApartment');
  }, [selectedApartment]);

  // 🚀 Preload all images
  useEffect(() => {
    const images = [
      emily, envy, outside, robert,
      one, two, three, four, five, six,
      seven, eight, nine, ten, eleven, twelve
    ];
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mini Real Estate Selector
      </motion.h1>

      <AnimatePresence mode="wait">
        {!selectedTower && (
          <TowerSelector towers={towers} onSelect={setTower} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedTower && !selectedFloor && (
          <FloorSelector
            tower={selectedTower}
            floors={floors}
            onBack={() => setTower(null)}
            onSelect={setFloor}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedFloor && !selectedApartment && (
          <ApartmentList
            floor={selectedFloor}
            apartments={apartments}
            onBack={() => setFloor(null)}
            onSelect={(apt) => setApartment(apt)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedApartment && (
          <ApartmentDetail
            apartment={selectedApartment}
            onBack={() => setApartment(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tower;
