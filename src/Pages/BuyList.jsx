import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import ButtonDelete from "../components/shared/ContentProducts/ButtonDelete";
import { RiCheckFill } from "react-icons/ri";

function BuyList() {
  const {
    dataBuys,
    estadoVendedorBuy,
    getBuys,
    deleteBuy,
    estadoClienteBuy,
    changeMode,
  } = useContext(ProductContext);
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
          <div className="text-white overflow-scroll">
            {dataBuys.length == 0 ? (
              <>
                <h6
                  className={`flex justify-center ${
                    changeMode ? "text-white" : "text-black"
                  } text-1xl pt-2`}
                >
                  No hay entregas ahun
                </h6>
              </>
            ) : (
              <>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th
                        className={`${
                          privUser == "Admin" ? "" : "hidden"
                        } py-1 px-2 border ${
                          changeMode ? `` : `text-[#000] border-[#000]`
                        }`}
                      >
                        Nombre del cliente
                      </th>
                      <th
                        className={`py-1 px-2 border ${
                          changeMode ? `` : `text-[#000] border-[#000]`
                        }`}
                      >
                        Nombre del Producto
                      </th>
                      <th
                        className={`py-1 px-2 border ${
                          changeMode ? `` : `text-[#000] border-[#000]`
                        }`}
                      >
                        Cantidad
                      </th>
                      <th
                        className={`py-1 px-2 border ${
                          changeMode ? `` : `text-[#000] border-[#000]`
                        }`}
                      >
                        Precio
                      </th>
                      <th
                        className={`py-1 px-2 border ${
                          changeMode ? `` : `text-[#000] border-[#000]`
                        }`}
                      >
                        Precio Total
                      </th>
                      <th
                        className={`${
                          privUser == "Admin" ? "" : "hidden"
                        } py-1 px-2 border ${
                          changeMode ? `` : `text-[#000] border-[#000]`
                        }`}
                      >
                        Telefono
                      </th>
                      <th
                        className={`${
                          privUser == "Admin" ? "" : "hidden"
                        } py-1 px-2 border ${
                          changeMode ? `` : `text-[#000] border-[#000]`
                        }`}
                      >
                        Direccion
                      </th>
                      <th
                        className={`py-1 px-2 border ${
                          changeMode ? `` : `text-[#000] border-[#000]`
                        }`}
                      >
                        Fecha de compra
                      </th>
                      <th
                        className={`py-1 px-2 border ${
                          changeMode ? `` : `text-[#000] border-[#000]`
                        }`}
                      >
                        Estado
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataBuys.map((buy) => (
                      <tr key={buy.id}>
                        <td
                          className={`${
                            privUser == "Admin" ? "" : "hidden"
                          } py-1 px-2 border ${
                            changeMode ? `` : `text-[#000] border-[#000]`
                          }`}
                        >
                          {buy.nombre_cliente}
                        </td>
                        <td
                          className={`py-1 px-2 border ${
                            changeMode ? `` : `text-[#000] border-[#000]`
                          }`}
                        >
                          {buy.nombre_producto}
                        </td>
                        <td
                          className={`py-1 px-2 border ${
                            changeMode ? `` : `text-[#000] border-[#000]`
                          }`}
                        >
                          {buy.cantidad_producto}
                        </td>
                        <td
                          className={`py-1 px-2 border ${
                            changeMode ? `` : `text-[#000] border-[#000]`
                          }`}
                        >
                          {buy.precio_producto}
                        </td>
                        <td
                          className={`py-1 px-2 border ${
                            changeMode ? `` : `text-[#000] border-[#000]`
                          }`}
                        >
                          {buy.precio_total}
                        </td>
                        <td
                          className={` ${
                            privUser == "Admin" ? "" : "hidden"
                          } py-1 px-2 border ${
                            changeMode ? `` : `text-[#000] border-[#000]`
                          }`}
                        >
                          {buy.numero_telefono}
                        </td>
                        <td
                          className={`${
                            privUser == "Admin" ? "" : "hidden"
                          } py-1 px-2 border ${
                            changeMode ? `` : `text-[#000] border-[#000]`
                          }`}
                        >
                          {buy.direccion_cliente}
                        </td>
                        <td
                          className={`py-1 px-2 border ${
                            changeMode ? `` : `text-[#000] border-[#000]`
                          }`}
                        >
                          {formatDate(buy.fecha_compra)} at{" "}
                          {formatTime(buy.fecha_compra)}
                        </td>

                        <td
                          className={`py-1 px-2 border ${
                            changeMode ? `` : `text-[#000] border-[#000]`
                          } ${
                            buy.estadoEntVendedor === "vendido" &&
                            buy.estadoEntCliente === "vendido"
                              ? "bg-green-500"
                              : buy.estadoEntVendedor === "vendido" ||
                                buy.estadoEntCliente === "vendido"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                        >
                          {buy.estadoEntVendedor == "vendido" &&
                          buy.estadoEntCliente == "vendido"
                            ? "Entregado"
                            : "Pendiente"}
                        </td>
                        <td className="py-2 px-4 border">
                          <ButtonDelete handleDelete={deleteBuy} id={buy.id} />
                          <button
                            onClick={() => {
                              if (privUser == "Admin") {
                                estadoVendedorBuy({
                                  id: buy.id,
                                });
                                getBuys();
                              } else {
                                estadoClienteBuy({
                                  id: buy.id,
                                });
                                getBuys();
                              }
                            }}
                            className={`bg-green-500 p-2 rounded-xl mt-2`}
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
