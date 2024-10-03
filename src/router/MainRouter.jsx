import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Category, Home, ItemDetail, NotFound } from "../pages";
import { MainLayout } from "../layouts/MainLayout";

export const MainRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};