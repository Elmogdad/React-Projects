import {motion} from 'framer-motion'
import React from 'react'

function AnimatedShape() {
    const boxVariants = {
        initial : {
            rotate :0,
            skew : 0,
        },
        hover : {
            scale : 1.2,
            rotate : 15,
            skew : '10deg',
            transition : { duration : 0.5} ,

        },

        click : {
            scale : 0.9,
            rotate : -15,
            transition : { duration : 0.5} ,
            backgoundCoulor : 'red'
        }

        
        }
  return (
    <div className='flex items-center justify-center h-screen'>
       <motion.div
       variants={boxVariants}
       initial='initial'
       whileHover={'hover'}
         whileTap={'click'}

       className="w-40 h-40 bg-blue-500 rounded-lg"/>

    </div>
  )
}

export default AnimatedShape