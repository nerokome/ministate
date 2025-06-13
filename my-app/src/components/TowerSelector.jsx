import { motion } from 'framer-motion';

const TowerSelector = ({ towers, onSelect }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className="flex justify-center gap-6" initial="initial" animate="animate" exit="exit">
      {towers.map((tower, index) => (
        <motion.div
          key={tower}
          className="p-6 w-40 text-center bg-blue-100 hover:bg-blue-400 rounded-lg shadow-xl cursor-pointer"
          onClick={() => onSelect(tower)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          variants={fadeInUp}
          transition={{ delay: index * 0.1 }}
        >
          <h2 className="text-xl font-semibold">{tower}</h2>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TowerSelector;
