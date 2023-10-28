import { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";

const BuysPage = () => {
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [respuesta, setRespuesta] = useState(null);
  const { cart } = useContext(CartContext);
  const { buys, dataDiscount } = useContext(ProductContext);
  const numberValue = parseInt(dataDiscount.CatnDescuento, 10);
  const numeroConvertido = numberValue / 100;


  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i < cart.length; i++) {
      if (dataDiscount.estadoDescuento == "Activated") {
        let buyData = {
          amount: cart[i].amount,
          id: cart[i].id,
          productName: cart[i].productName,
          price: cart[i].price - cart[i].price * numeroConvertido,
          totalPrice: (cart[i].amount * cart[i].price) - (cart[i].amount * cart[i].price) * numeroConvertido,
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
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h6 className="text-2xl font-semibold mb-4">Formulario de compra</h6>
      <p>
        El encargo se hara a domicilio, necesitamos saber cual es su numero y
        direccion para hacer el envio
      </p>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Número de Teléfono:
          </label>
          <input
            type="tel"
            required
            maxLength="11" // Longitud total incluyendo el prefijo +53
            defaultValue="+53"
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
      {respuesta && <div className="mt-4 text-green-600">{respuesta}</div>}
    </div>
  );
};

export default BuysPage;
