import Router from "./Routes/Router";
import AlertModal from "./components/shared/ContentProducts/AlertModal";
import Loading from "./components/shared/ContentProducts/Loading";
import Futter from "./components/shared/ContentProducts/Futter";
import { useContext } from "react";
import { ProductContext } from "./Context/ProductContext";

function App() {
  const { changeMode } = useContext(ProductContext);
  return (
    <div className={`w-full h-screen ${changeMode ? "bg-[#262837]" : ""}`}>
      <AlertModal />
      <Loading />
      <Router />
      <Futter />
    </div>
  );
}

export default App;
