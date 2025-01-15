

import "./App.css"
import Nav from "./Navigation/Nav"
import Products from "./Porducts/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./sidebar/Sidebar"

const App = () => {
  return (
  <>
  <Sidebar />
<Nav />
<Recommended />
<Products />
  </>
  )
}

export default App