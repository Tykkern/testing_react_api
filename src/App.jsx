import { Routes, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList/ProductsList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import NotFoundPage from "./components/NotFoundPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;