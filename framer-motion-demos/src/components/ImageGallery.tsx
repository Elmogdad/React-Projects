import { motion } from "framer-motion";
const images = [
  {
    src: "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Image 3",
  },
];

function ImageGallery() {
  return (
    <div className="w-[80%] flex">
      {images.map((image, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="relative m-[1rem]  rounded-lg shadow-lg overflow-hidden"
        >
          <img src={image.src} alt={image.caption} className="w-full h-auto" />
        

          <motion.div 
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 text-white cursor-pointer transition-opacity duration-300">

        <p className="text-lg">{image.caption}</p>
          </motion.div>
        
        </motion.div>
      ))}
    </div>
  );
}

export default ImageGallery;
