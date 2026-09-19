import {
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext(null);

function getInitialUser() {
  try {
    const savedUser = localStorage.getItem("nouran-user");

    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getInitialUser);

  const register = (userData) => {
    localStorage.setItem(
      "nouran-user",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  const login = (email, password) => {
    const savedUser = localStorage.getItem("nouran-user");

    if (!savedUser) {
      return {
        success: false,
        message: "No account found. Please register first.",
      };
    }

    const storedUser = JSON.parse(savedUser);

    if (
      storedUser.email !== email ||
      storedUser.password !== password
    ) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    setUser(storedUser);

    return {
      success: true,
      message: "Login successful.",
    };
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: Boolean(user),
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside an AuthProvider"
    );
  }

  return context;
}