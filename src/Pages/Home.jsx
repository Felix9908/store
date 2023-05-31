import ProductList from "../components/shared/ContentProducts/ProductList";
import Carrito from "../components/shared/Carrito";
import { useContext } from "react";
import Header from "../components/shared/Header";
import { ProductContext } from "../Context/ProductContext";

function Home() {
  const { data } = useContext(ProductContext);

  return (
    <div>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-8 md:p-8">
          <Header title="Main menu" />
          <ProductList data1={data} />
        </div>
      </main>
      <Carrito />
    </div>
  );
}

export default Home;
