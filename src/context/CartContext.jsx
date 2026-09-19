import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

function getInitialCart() {
  try {
    const savedCart = localStorage.getItem("nouran-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(getInitialCart);

  const saveCart = (items) => {
    localStorage.setItem("nouran-cart", JSON.stringify(items));
  };

  const addToCart = (product, quantity = 1) => {
  setCartItems((currentItems) => {
    const existingItem = currentItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      const newQuantity = Math.min(
        existingItem.quantity + quantity,
        product.stock
      );

      const updatedItems = currentItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: newQuantity }
          : item
      );

      saveCart(updatedItems);
      return updatedItems;
    }

    const safeQuantity = Math.min(quantity, product.stock);

    const updatedItems = [
      ...currentItems,
      {
        ...product,
        quantity: safeQuantity,
      },
    ];

    saveCart(updatedItems);
    return updatedItems;
  });
};

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => {
      const updatedItems = currentItems.filter(
        (item) => item.id !== productId
      );

      saveCart(updatedItems);

      return updatedItems;
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems((currentItems) => {
      const updatedItems = currentItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity,
            }
          : item
      );

      saveCart(updatedItems);

      return updatedItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("nouran-cart");
  };

  const cartCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [cartItems]
  );

  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [cartItems]
  );

  const value = {
    cartItems,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside a CartProvider"
    );
  }

  return context;
}