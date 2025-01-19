import React from 'react'
import Index from './pages/Index/Index'
import Header from './components/Header/Header'
import About from './pages/About/About'
import News from './pages/News/News'

const App = () => {
  return (
<>
<main>
<Header />

<Index />
<News />
<About />
</main>


</>

  )
  
}

export default App