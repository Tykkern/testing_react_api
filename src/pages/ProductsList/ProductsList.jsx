import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductsList.module.css";

const URL = "https://fakestoreapi.com/products";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error("Не удалось загрузить товары");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Загрузка товаров...</div>;

  if (error) return <div className="error">Ошибка: {error}</div>;

  return (
    <div className="products-container">
      <h1>Товары</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;