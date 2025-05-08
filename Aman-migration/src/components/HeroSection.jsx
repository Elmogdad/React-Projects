
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.jpeg'; // Adjust the path to your image

function HeroSection() {
  return (
    <section className="bg-orange-100 py-16" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-green-700 mb-4 leading-relaxed">
            معاً نحو هجرة آمنة وقانونية
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
            نعمل على توعية وحماية المهاجرين وضمان حقوقهم من خلال البرامج والمبادرات الفعالة.
          </p>
          
          {/* Animated Button */}
          <a href="/contact">
          <motion.button
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            تواصل معنا
          </motion.button>
          </a>
     
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={heroImage}
            alt="الهجرة الآمنة"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
