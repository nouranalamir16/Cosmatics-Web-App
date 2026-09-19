import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const WishlistContext = createContext(null);

function getInitialWishlist() {
  try {
    const savedWishlist =
      localStorage.getItem("nouran-wishlist");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(
    getInitialWishlist
  );

  const saveWishlist = (items) => {
    localStorage.setItem(
      "nouran-wishlist",
      JSON.stringify(items)
    );
  };

  const toggleWishlist = (product) => {
    setWishlistItems((currentItems) => {
      const exists = currentItems.some(
        (item) => item.id === product.id
      );

      const updatedItems = exists
        ? currentItems.filter(
            (item) => item.id !== product.id
          )
        : [...currentItems, product];

      saveWishlist(updatedItems);

      return updatedItems;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((currentItems) => {
      const updatedItems = currentItems.filter(
        (item) => item.id !== productId
      );

      saveWishlist(updatedItems);

      return updatedItems;
    });
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(
      (item) => item.id === productId
    );
  };

  const wishlistCount = useMemo(
    () => wishlistItems.length,
    [wishlistItems]
  );

  const value = {
    wishlistItems,
    wishlistCount,
    toggleWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside a WishlistProvider"
    );
  }

  return context;
}