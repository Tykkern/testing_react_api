
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StarRating from "../../components/StarRating/StarRating";
import "./ProductDetail.module.css";

const URL = "https://fakestoreapi.com/products";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Товар не найден");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error || !product) return <div className="error">{error || "Товар не найден"}</div>;

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>

      <div className="content">
        <div className="image-container">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="info">
          <div className="price">Price: {product.price.toFixed(2)} $</div>

          <div className="description">
            <strong>Description:</strong>
            <p>{product.description}</p>
          </div>

          <StarRating rating={product.rating.rate} />

          <button className="back-btn" onClick={() => navigate(-1)}>
            НАЗАД
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;