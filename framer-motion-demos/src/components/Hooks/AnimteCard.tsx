import {motion }    from 'framer-motion'


function AnimteCard() {
  return (
    <div className='flex justify-center items-start mt-[30rem]'>
        <div className="h-[200vh] w-full flex justify-center items-center ">
        <motion.div 
        initial={{ scale: 0.5 , opacity: 0}}
        whileInView={{
            scale: 1.2,
            opacity: 1,
        }}

        className='bg-white rounded-lg p-6 shadow-lg text-center'>
        <h2 className="text-2xl font-bold mb-2 text-black">
      Amazing card
        </h2>
        <p className="text-gray-600">This Card animates beautifully into view!</p>
        </motion.div>
        </div>
    </div>
  )
}

export default AnimteCard