import { AiFillStar } from "react-icons/ai"
import { BsFillBagFill } from "react-icons/bs"


import "../Porducts/Products.css"


const Card = () => {
  return (
    <section className="card">
    <img src="https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg" alt="" className="card-img" />
<div className="card-details">
<h3 className="card-title">Bridal Sandals Glitter</h3>
<section className="card-reviews">
 <AiFillStar className="rating-star" />
 <AiFillStar className="rating-star" />
 <AiFillStar className="rating-star" />
 <AiFillStar className="rating-star" />
 <span className="total-reviews">(123 reviews)</span>
</section>
<section className="card-price">
 <div className="price">
 <del>$300</del>200
 </div>
 <div className="bag">
   <BsFillBagFill className="bag-icon" />  
 </div>
</section>
</div>
 </section>
  )
}

export default Card