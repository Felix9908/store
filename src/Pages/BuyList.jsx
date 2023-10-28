import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import ButtonDelete from "../components/shared/ContentProducts/ButtonDelete";
import { RiCheckFill } from "react-icons/ri";

function BuyList() {
  const { dataBuys, estadoBuy, getBuys, deleteBuy } =
    useContext(ProductContext);
  const privUser = sessionStorage.getItem("privUser");

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  return (
    <div>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-8 md:p-8">
          <h6 className="flex justify-center text-white text-2xl">
            Entregas pendientes
          </h6>
          <div className="text-white">
            {dataBuys.length == 0 ? (
              <>
                <h6 className="flex justify-center text-white text-1xl pt-2">
                  No hay entregas ahun
                </h6>
              </>
            ) : (
              <>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border">Nombre del cliente</th>
                      <th className="py-2 px-4 border">Nombre del Producto</th>
                      <th className="py-2 px-4 border">Cantidad</th>
                      <th className="py-2 px-4 border">Precio</th>
                      <th className="py-2 px-4 border">Precio Total</th>
                      <th className="py-2 px-4 border">Telefono</th>
                      <th className="py-2 px-4 border">Direccion</th>
                      <th className="py-2 px-4 border">Fecha de compra</th>
                      <th className="py-2 px-4 border">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataBuys.map((buy) => (
                      <tr key={buy.id}>
                        <td className="py-2 px-4 border">
                          {buy.nombre_cliente}
                        </td>
                        <td className="py-2 px-4 border">
                          {buy.nombre_producto}
                        </td>
                        <td className="py-2 px-4 border">
                          {buy.cantidad_producto}
                        </td>
                        <td className="py-2 px-4 border">
                          {buy.precio_producto}
                        </td>
                        <td className="py-2 px-4 border">{buy.precio_total}</td>
                        <td className="py-2 px-4 border">
                          {buy.numero_telefono}
                        </td>
                        <td className="py-2 px-4 border">
                          {buy.direccion_cliente}
                        </td>
                        <td className="py-2 px-4 border">
                          {formatDate(buy.fecha_compra)} at{" "}
                          {formatTime(buy.fecha_compra)}
                        </td>
                        <td
                          className={`py-2 px-4 border ${
                            buy.estado == "pendiente"
                              ? "bg-red-500"
                              : "bg-green-500"
                          }`}
                        >
                          {buy.estado}
                        </td>
                        <td className="py-2 px-4 border">
                          <ButtonDelete handleDelete={deleteBuy} id={buy.id} />
                          <button
                            onClick={() => {
                              estadoBuy({
                                id: buy.id,
                              });
                              getBuys();
                            }}
                            className={`bg-green-500 p-2 rounded-xl mt-2 ${
                              privUser == "Admin" ? "" : "hidden"
                            }`}
                          >
                            <RiCheckFill className="text-xl" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default BuyList;
