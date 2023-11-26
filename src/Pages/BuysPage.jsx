import { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/shared/Card";

const BuysPage = () => {
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const { cart } = useContext(CartContext);
  const {
    dataDiscount,
    getBuys,
    setShowAlert,
    setAlertMessage,
    setAlertTitulo,
    setColorAlert,
  } = useContext(ProductContext);
  const numberValue = parseInt(dataDiscount.CatnDescuento, 10);
  const numeroConvertido = numberValue / 100;
  const navigate = useNavigate();

  const buys = async ({ buyData }) => {
    try {
      await axios.post("https://back-endstore-production.up.railway.app/buys", buyData).then((res) => {
        setShowAlert(true);
        setAlertMessage(res.data + " Gracias por comprar en nuestra tienda");
        setColorAlert("bg-green-500");
        setAlertTitulo("Mensaje");
        getBuys();
        navigate("/buyList");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i < cart.length; i++) {
      if (dataDiscount.estadoDescuento == "Activated") {
        let buyData = {
          amount: cart[i].amount,
          id: cart[i].id,
          productName: cart[i].productName,
          price: cart[i].price - cart[i].price * numeroConvertido,
          totalPrice:
            cart[i].amount * cart[i].price -
            cart[i].amount * cart[i].price * numeroConvertido,
          telefono,
          direccion,
          available: cart[i].available,
          fecha_compra: Date(),
        };
        buys({ buyData });
      } else {
        let buyData = {
          amount: cart[i].amount,
          id: cart[i].id,
          productName: cart[i].productName,
          price: cart[i].price,
          totalPrice: cart[i].amount * cart[i].price,
          telefono,
          direccion,
          available: cart[i].available,
          fecha_compra: Date(),
        };
        buys({ buyData });
      }
    }
  };

  return (
    <div className="lg:ml-[110px] pt-10">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h6 className="text-2xl font-semibold mb-4">Formulario de compra</h6>
        <p>
          El encargo se hara a domicilio de foma gratuita. Para realizarlo necesitamos saber
          cual es su número y dirección. Solo es para
          dentro de Manicaragua
        </p>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Número de Teléfono:
            </label>
            <input
              type="tel"
              required
              maxLength="11"
              className="mt-1 p-2 w-full border rounded-md"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Dirección Particular:
            </label>
            <input
              type="text"
              required
              className="mt-1 p-2 w-full border rounded-md"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Enviar
          </button>
        </form>
      </div>
      {/* list products buy */}
      <div className="m-5 flex flex-col items-center justify-center">
        <p className="text-2xl p-5 font-bold">Productos a comprar</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-14 pb-[50px]">
          {cart.map((item) => (
            <Card key={item.id} data={item} type="BuyPage" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuysPage;
