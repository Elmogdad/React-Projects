import {motion} from 'framer-motion'

function StaggierAnimation() {

    const parentVariants = {
    hidden : { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
    }
      }
    }

    const childVariants = {
      hidden : { opacity: 0, y:  20},
      visible : {opacity : 1, y: 0}
    }
  return (
    <motion.div className='container' variants={parentVariants} initial='hidden' animate='visible'>
        {[...Array(5)].map((_, i) => (
            <motion.div className='box mt-[2rem]' key={i}
            variants={childVariants}
            />
        ))}
    </motion.div>
  )
}

export default StaggierAnimation