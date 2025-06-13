import { motion } from 'framer-motion';
import { RxExit } from "react-icons/rx";

const ApartmentList = ({ floor, apartments, onBack, onSelect }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div initial="initial" animate="animate" exit="exit" className="mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Apartments on {floor}</h2>
        <motion.button onClick={onBack} className="text-sm text-red-400 underline" whileHover={{ scale: 1.1 }}>
          <button className='flex gap-2  bg-gray-300  border border-transparent rounded-lg py-2 px-5 shadow-sm shadow-gray-700/50'>
                     <RxExit size={20} color='red' />
                    <h1>back</h1>
                  </button>
        </motion.button>
      </div>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {apartments.map((apt, i) => (
          <motion.div
            key={apt.id}
            className="bg-white rounded-lg shadow relative overflow-hidden cursor-pointer group"
            onClick={() => onSelect(apt)}
            whileHover={{ scale: 1.03 }}
            variants={fadeInUp}
            transition={{ delay: i * 0.1 }}
          >
            <motion.img
              src={apt.image}
              alt={apt.type}
              className="w-full h-80 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4 space-y-1">
              <p className="text-sm">{apt.area}</p>
              <p className="font-semibold">{apt.type}</p>
              <p className="text-gray-500 text-sm">{apt.rooms}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ApartmentList;
