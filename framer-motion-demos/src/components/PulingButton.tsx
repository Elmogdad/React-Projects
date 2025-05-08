
import {motion} from 'framer-motion'


function PulingButton() {
  return <motion.button className='px-4 py-2 text-white bg-blue-500 rounded-md outline-none focus:outline-none' 
  animate={{scale: [1, 1.1, 1], backgroundColor: ['#2563EB', '#2563EB', '#2563EB']}}
  transition={{duration: 0.8, ease: 'easeInOut', repeat: Infinity}}


  >
    Click Me
  </motion.button>
}

export default PulingButton