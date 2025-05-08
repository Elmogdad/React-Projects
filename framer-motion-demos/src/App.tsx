

import {motion, useMotionValue, useMotionValueEvent} from 'framer-motion'
import RangeSlider from './components/Hooks/RangeSlider'
import DragableBox from './components/Hooks/DragableBox'
import AnimteCard from './components/Hooks/AnimteCard'


function App() {



return (
  <div>
    <h1 className="text-center text-3xl mb-4">Scroll Down To See Animation</h1>
    <div className="h-screen"></div>
   <AnimteCard />
  </div>
)  
 
}

export default App