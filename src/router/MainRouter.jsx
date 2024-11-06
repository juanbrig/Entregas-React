import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Category,
  Checkout,
  Home,
  ItemDetail,
  NotFound,
} from "../pages";
import { NavBar } from "../components";

export const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};