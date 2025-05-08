import { motion } from "framer-motion";

function AnimatedCard() {
  return (
    <motion.div 
    initial={{ scale: 1, rotate: 0 }}
    whileHover={{ scale: 1.05, rotate: 3 }}
    whileTap={{ scale: 0.95 }}
    drag
    dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
      <img
        className="w-full h-48 object-cover object-center"
        src="https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="avatar"
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-blue-500 ">Card Title</h2>
        <p className="text-gray-700 mb-4">This is a simple card with framer motion anmites and tailwind css fo stylong  </p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </motion.div>
  );
}

export default AnimatedCard;
