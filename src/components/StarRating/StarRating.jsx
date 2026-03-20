
import "./StarRating.module.css"; 

function StarRating({ rating }) {
  const rounded = Math.round(rating);

  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < rounded ? "★" : "☆";
  });

  return (
    <div className="stars">
      {stars.map((star, i) => (
        <span key={i} className={star === "★" ? "filled" : "empty"}>
          {star}
        </span>
      ))}
    </div>
  );
}

export default StarRating;