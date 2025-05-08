import { stagger } from 'framer-motion'
import { motion } from 'framer-motion'
import React from 'react'


const galleryImage = [
    "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524429656589-6633a470097c?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]   

  const prevVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      transition: {
       staggerChildren: 0.5,
       staggerDirection: 1,
      },
    },
  }  

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
function AnimateGallery() {
    const [showImage , setShowImage] = React.useState(false)

    const handeShowImage = () => {
        setShowImage((prev) => !prev)
    }

  return (
    <div>
        <button onClick={handeShowImage}
        className='mb-[2rem] p-4 rounded-lg bg-yellow-500 text-black font-bold'
        >{showImage ? 'Hide Image' : 'Show Image'}</button>

        <motion.div
        variants={prevVariants}
        initial='hidden'
        animate={showImage ? 'visible' : 'hidden'}
        className="flex">
            {galleryImage.map((image, index) => (
                <motion.img

                src={image} alt={`Gallery Image ${index + 1}`} className='ml-[2rem] h-[300px] w-[300px] rounded-lg shadow-lg'   variants={childVariants}/>
            ))}
        </motion.div>
    </div>
  )
}

export default AnimateGallery