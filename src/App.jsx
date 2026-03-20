import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList/ProductsList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import NotFoundPage from "./components/NotFoundPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;