import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating.jsx";
import "./ProductCard.module.css"; 

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <StarRating rating={product.rating.rate} />
      <Link to={`/product/${product.id}`} className="title-link">
        <h3>{product.title}</h3>
      </Link>

      
    </div>
  );
}

export default ProductCard;