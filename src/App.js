import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { scroller } from "react-scroll";

import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import ProductList from "./components/ProductList";
import CustomProductForm from "./components/CustomProductForm";
import Footer from "./components/Footer";
import ClientsGallery from "./components/ClientsGallery";
import WhatsappButton from "./components/WhatsappButton";

import { CartProvider } from "./context/CartContext";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AboutSection from "./pages/AboutSection";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 600,
        offset: -80,
      });
    }
  }, [location.state]);

  return (
    <>
      <section id="inicio">
        <HomeSection />
      </section>

      <section id="productos" className="products-section section-slide">
        <h2>Nuestros Productos</h2>
        <ProductList />
      </section>

      <section id="personaliza" className="custom-section section-slide">
        <h2>Personalizá tu camita</h2>
        <CustomProductForm />
      </section>

      <section id="contacto" className="contact-section section-slide">
        <h2>Contacto</h2>
        <Footer />
      </section>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clientes" element={<ClientsGallery />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<AboutSection />} />
          </Routes>
        </main>
        
        <WhatsappButton />
      </Router>
    </CartProvider>
  );
}

export default App;
