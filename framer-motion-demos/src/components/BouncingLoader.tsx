import {animate, motion} from 'framer-motion'

function BouncingLoader() {
  return (
    <div className='flex justify-center items-center space-x-2' >
        <motion.div className='w-4 h-4 bg-blue-500 rounded-full' 
        animate={{y: [0, -10, 0], backgroundColor: ['#2563EB', '#2563EB', '#2563EB']}}
        transition={{duration: 0.5, ease: 'easeInOut', repeat: Infinity}}
        ></motion.div>
        <motion.div className='w-4 h-4 bg-blue-500 rounded-full' 
        animate={{y: [0, -10, 0], backgroundColor: ['#2563EB', '#2563EB', '#2563EB']}}
        transition={{duration: 0.5, ease: 'easeInOut', repeat: Infinity, delay: 0.1}}
        ></motion.div>
        <motion.div className='w-4 h-4 bg-blue-500 rounded-full' 
        animate={{y: [0, -10, 0], backgroundColor: ['#2563EB', '#2563EB', '#2563EB']}}
        transition={{duration: 0.5, ease: 'easeInOut', repeat: Infinity, delay: 0.2}}
        ></motion.div>

    </div>
  )
}

export default BouncingLoader