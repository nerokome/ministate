import { motion } from 'framer-motion';
import { RxExit } from "react-icons/rx";

const FloorSelector = ({ tower, floors, onBack, onSelect }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div initial="initial" animate="animate" exit="exit" className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Select Floor in {tower}</h2>
        <motion.button onClick={onBack} className="text-sm text-red-400 underline" whileHover={{ scale: 1.1 }}>
          <button className='flex gap-2  bg-gray-300  border border-transparent rounded-lg py-2 px-5 shadow-sm shadow-gray-700/50'>
             <RxExit size={20} color='red' />
            <h1>back</h1>
          </button>
        </motion.button>
      </div>
      <motion.div className="grid grid-cols-3 gap-4">
        {floors.map((floor, i) => (
          <motion.div
            key={floor}
            className="bg-white p-4 rounded-lg shadow hover:bg-gray-200 cursor-pointer"
            onClick={() => onSelect(floor)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
            transition={{ delay: i * 0.04 }}
          >
            {floor}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FloorSelector;
