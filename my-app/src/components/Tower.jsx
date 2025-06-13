import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TowerSelector from './TowerSelector';
import ApartmentDetail from './ApartmentDetail';
import ApartmentList from './ApartmentList';
import FloorSelector from './FloorSelector';

const Tower = () => {
  const towers = ['Tower A', 'Tower B', 'Tower C'];
  const floors = Array.from({ length: 15 }, (_, i) => `Floor ${15 - i}`);
 const apartments = [
  {
    id: 1,
    image: "/public/emily.png",
    area: "1200 sqft",
    type: "2BHK",
    rooms: "2 Bed, 1 Kitchen",
    gallery: [
      "/public/ten.png",
      "/public/eleven.png",
      "/public/twelve.png"
    ],
  },
  {
    id: 2,
    image: "/public/envy.png",
    area: "1500 sqft",
    type: "3BHK",
    rooms: "3 Bed, 1 Kitchen",
    gallery: [
      "/public/seven.png",
      "/public/eight.png",
      "/public/nine.png"
    ],
  },
  {
    id: 3,
    image: "/public/outside.png",
    area: "900 sqft",
    type: "1BHK",
    rooms: "1 Bed, 1 Kitchen",
    gallery: [
      "/public/four.png",
      "/public/five.png",
      "/public/six.png"
    ],
  },
  {
    id: 4,
    image: "/public/robert.png",
    area: "1100 sqft",
    type: "2BHK",
    rooms: "2 Bed, 1 Kitchen",
    gallery: [
      "/public/one.png",
      "/public/two.png",
      "/public/three.png"
    ],
  },
];


  const [selectedTower, setTower] = useState(null);
  const [selectedFloor, setFloor] = useState(null);
  const [selectedApartment, setApartment] = useState(null);

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
            onSelect={setApartment}
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
