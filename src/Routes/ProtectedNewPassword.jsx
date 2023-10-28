import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

function ProtectedNewPassword({ children }) {
  const { verifiAcount } = useContext(ProductContext);

  if (verifiAcount) {
    return children;
  } else {
    return <Navigate to="/newPassword" />;
  }
}
export default ProtectedNewPassword;
