import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import initialProducts from "../data/products";

const ProductContext = createContext(null);

function getInitialProducts() {
  try {
    const savedProducts =
      localStorage.getItem("nouran-products");

    return savedProducts
      ? JSON.parse(savedProducts)
      : initialProducts;
  } catch {
    return initialProducts;
  }
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(
    getInitialProducts
  );

  const saveProducts = (items) => {
    localStorage.setItem(
      "nouran-products",
      JSON.stringify(items)
    );
  };

  const reduceStock = (cartItems) => {
    setProducts((currentProducts) => {
      const updatedProducts = currentProducts.map(
        (product) => {
          const purchasedItem = cartItems.find(
            (item) => item.id === product.id
          );

          if (!purchasedItem) {
            return product;
          }

          return {
            ...product,
            stock: Math.max(
              0,
              product.stock - purchasedItem.quantity
            ),
          };
        }
      );

      saveProducts(updatedProducts);

      return updatedProducts;
    });
  };

  const value = useMemo(
    () => ({
      products,
      reduceStock,
    }),
    [products]
  );

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProducts must be used inside a ProductProvider"
    );
  }

  return context;
}