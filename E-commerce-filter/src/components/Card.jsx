import { AiFillStar } from "react-icons/ai"
import { BsFillBagFill } from "react-icons/bs"


import "../Porducts/Products.css"


const Card = ({img, title, reviews, newPrice, prevPrice}) => {
  return (
    <section className="card">
    <img src={img} alt={title} className="card-img" />
<div className="card-details">
<h3 className="card-title">{title}</h3>

<section className="card-reviews">
<AiFillStar className="ratings-star" />
<AiFillStar className="ratings-star" />
<AiFillStar className="ratings-star" />
<AiFillStar className="ratings-star" />
 <span className="total-reviews">{reviews}</span>
</section>
<section className="card-price">
 <div className="price">
 <del>{prevPrice}</del> {newPrice}
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