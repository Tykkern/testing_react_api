
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/products">
        <button style={{ padding: "12px 32px", fontSize: "1.2rem" }}>
          Перейти к списку товаров
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;