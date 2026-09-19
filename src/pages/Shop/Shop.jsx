import { useMemo, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../context/ProductContext";
import "./Shop.css";



function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const { products } = useProducts();

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All") {
      result = result.filter(
        (product) => product.category === activeCategory
      );
    }

    if (searchTerm.trim()) {
  const search = searchTerm.toLowerCase();

  result = result.filter(
    (product) =>
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
  );
}

    if (sortOption === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOption === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortOption === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [products, activeCategory, searchTerm, sortOption]);

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <div className="nouran-container">
          <span className="shop-eyebrow">
            THE NOURAN COLLECTION
          </span>

          <h1 className="section-title">
            Shop Beauty, Your Way
          </h1>

          <p className="section-subtitle">
            Discover thoughtfully selected skincare, makeup, and
            fragrances created to make your beauty routine feel
            effortless.
          </p>
        </div>
      </section>

      <section className="shop-products-section">
        <div className="nouran-container">

          <div className="shop-tools">

            <div className="shop-search">
              <i className="bi bi-search"></i>

              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
              />
            </div>

            <div className="shop-sort">
              <label htmlFor="sort-products">
                Sort by
              </label>

              <select
                id="sort-products"
                value={sortOption}
                onChange={(event) =>
                  setSortOption(event.target.value)
                }
              >
                <option value="default">
                  Featured
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="name">
                  Name
                </option>
              </select>
            </div>

          </div>

          <div className="shop-toolbar">

            <div className="shop-filters">
              {[
                "All",
                "Skincare",
                "Makeup",
                "Fragrance",
              ].map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`shop-filter ${
                    activeCategory === category
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>
              ))}
            </div>

            <span className="shop-count">
              {filteredProducts.length} Products
            </span>

          </div>

          {filteredProducts.length > 0 ? (
            <div className="shop-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="shop-empty">
              <i className="bi bi-search"></i>

              <h2>No products found</h2>

              <p>
                Try another search or choose a different category.
              </p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

export default Shop;