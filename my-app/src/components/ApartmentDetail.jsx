import { motion } from 'framer-motion';
import { RxExit } from "react-icons/rx";

const ApartmentDetail = ({ apartment, onBack }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    className="mt-10 flex flex-col items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8"
  >
    <motion.button
      onClick={onBack}
      whileHover={{ scale: 1.05 }}
      className="mb-6 flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-red-500 font-medium border border-gray-300 rounded-lg py-2 px-4 shadow-sm shadow-gray-500/40 transition-all duration-200"
    >
      <RxExit size={20} />
      <span>Back to list</span>
    </motion.button>

    <motion.img
      src={apartment.image}
      alt={apartment.type}
      loading="lazy"
      className="w-full h-[620px] sm:h-[750px] md:h-[420px] lg:h-[850px] object-cover rounded-lg shadow-lg transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />

    <motion.div className="mt-6 space-y-3 text-sm sm:text-base md:text-lg text-gray-700">
      <p><strong>Area:</strong> {apartment.area}</p>
      <p><strong>Unit Type:</strong> {apartment.type}</p>
      <p><strong>Rooms:</strong> {apartment.rooms}</p>
    </motion.div>

    {apartment.gallery && (
      <motion.div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">More Views</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {apartment.gallery.map((imgUrl, idx) => (
            <motion.img
              key={idx}
              src={imgUrl}
              alt={`Extra view ${idx + 1}`}
              loading="lazy"
              className="w-full h-48 object-cover rounded-lg shadow"
              whileHover={{ scale: 1.03 }}
            />
          ))}
        </div>
      </motion.div>
    )}
  </motion.div>
);

export default ApartmentDetail;
