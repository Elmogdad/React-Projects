import { useState } from "react";

import Products from "./Porducts/Products"

import Nav from "./Navigation/Nav";

import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

const App = () => {
  
  // ------ SelcetedCategory to pass value of selected inside function fileterData as pramert
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter to pass input value chars to search the query insside products , as pramert inside function filterData -----------
  const [query, setQuery] = useState("");


  // ---- to handle input search in navigation 
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // --- to filtered products title have same query value 
  const filteredItems = products?.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  ) || [];

  // ----------- Radio Filtering to handle changes radios value in sidebar and put it inside selctedCategory -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering to handles buttons of recommended and put it value inside selectedCategory -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

/// --- The Main Function to handles All values and bring products selected

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items // Seach in navigation 
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter -- to set value inside selectedCategory 
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({category, color, company, newPrice, title}) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={ handleChange }/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended  handleClick={handleClick}/>
      <Products result={result}/>
    </>
  );

};

export default App;
