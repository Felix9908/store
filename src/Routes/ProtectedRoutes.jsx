import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

function ProtectedRoutes({ children }) {
  const { logged } = useContext(ProductContext);

  if (logged) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
export default ProtectedRoutes;
