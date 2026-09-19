import {
  createContext,
  useContext,
  useState,
} from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({
      message,
      type,
    });

    setTimeout(() => {
      setToast(null);
    }, 2200);
  };

  return (
    <ToastContext.Provider
      value={{
        toast,
        showToast,
      }}
    >
      {children}

      {toast && (
        <div className={`nouran-toast ${toast.type}`}>
          <div className="toast-icon">
            <i className="bi bi-check2"></i>
          </div>

          <span>{toast.message}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToast must be used inside a ToastProvider"
    );
  }

  return context;
}