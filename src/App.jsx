import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./context/ToastContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import PromoSection from "./components/PromoSection/PromoSection";
import BrandValues from "./components/BrandValues/BrandValues";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import Shop from "./pages/Shop/Shop";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { AuthProvider } from "./context/AuthContext";
import Account from "./pages/Account/Account";
import Checkout from "./pages/Checkout/Checkout";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import { ProductProvider } from "./context/ProductContext";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ThreeDShowcase from "./components/ThreeDShowcase/ThreeDShowcase";
import NotFound from "./pages/NotFound/NotFound";

function Home() {
  const homeRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".home-animate");

      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: index * 0.12,
            ease: "power3.out",
          }
        );
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={homeRef} className="home-page">
      <div className="home-animate">
        <Hero />
      </div>

      <div className="home-animate">
        <Categories />
      </div>

      <div className="home-animate">
        <FeaturedProducts />
      </div>

      <div className="home-animate">
        <ThreeDShowcase />
      </div>
      <div className="home-animate">
        <PromoSection />
      </div>

      <div className="home-animate">
        <BrandValues />
      </div>
    </div>
  );
}


function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
          <WishlistProvider>
            <BrowserRouter basename={import.meta.env.BASE_URL}>
              <Navbar />

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/product/:id" element={<ProductDetails />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/wishlist" element={<Wishlist />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/account" element={<Account />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/order-success" element={<OrderSuccess />} />
  <Route path="*" element={<NotFound />} />
</Routes>
              <Footer />
            </BrowserRouter>
          </WishlistProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;