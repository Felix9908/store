import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [logged, setLogged] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertTitulo, setAlertTitulo] = useState("");
  const [colorAlert, setColorAlert] = useState("");
  const [users, setUsers] = useState([]);
  const [dataBuys, setDataBuys] = useState([]);
  const [emailUser, setEmailUser] = useState("");
  const [verifiAcount, setVerifiAcount] = useState(false);
  const [dataDiscount, setDataDiscount] = useState("");

  useEffect(() => {
    if (showAlert == true) {
      setTimeout(() => {
        setShowAlert(false);
      }, 10000);
    }
  }, [showAlert]);

  var token = sessionStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
  }

  useEffect(() => {
    if (logged == false && token == null) {
      setShowAlert(true);
      setAlertMessage(
        "Bienvenido a muestra aplicacion de tienda online, inicie sesión para empezar a comprar"
      );
      setColorAlert("bg-green-500");
      setAlertTitulo("Bienvenido");
    }
  }, []);

  const UtilesDelHogar = products.filter(
    (data1) => data1.type === "UtilesDelHogar"
  );

  const Perfumeria = products.filter((data1) => data1.type === "Perfumeria");

  const Zapatos = products.filter((data1) => data1.type === "Zapatos");

  const Ropa = products.filter((data1) => data1.type === "Ropa");

  const Aceo = products.filter((data1) => data1.type === "Aceo"); 

  const getBuys = async () => {
    try {
      await axios.get("http://localhost:9999/getbuys").then((res) => {
        const privUser = sessionStorage.getItem("privUser");
        setLoading(false);
        const id = sessionStorage.getItem("idClient");
        const data = res.data;
        if (privUser == "Cliente") {
          const resultData = data.filter(
            (compra) =>
              compra.cliente_id === parseInt(id, 10) &&
              compra.estado === "pendiente"
          );
          setDataBuys(resultData);
        } else {
          setDataBuys(res.data);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getTienda = async () => {
    try {
      const res = await axios.get("http://localhost:9999/getTienda");
      setDataDiscount(res.data[0]);
    } catch (err) {
      setShowAlert(true);
      setAlertMessage(err.response.msg);
      setColorAlert("bg-red-500");
      setAlertMessage("Error");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        await axios.get("http://localhost:9999/data").then((res) => {
          setProducts(res.data);
          setLoading(false);
        });
      } catch (err) {
        console.log(err);
      }
    };

    const dataUserLogin = sessionStorage.getItem("dataUserLogin");
    if (dataUserLogin && dataUserLogin.length > 0) {
      setVerifiAcount(true);
    }

    loadData();
    getBuys();
    getTienda();
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setLogged(true);
    }
    if (data.length === 0) {
      setData(products);
    }
  }, [products]);

  const login = async ({ email, password }) => {
    try {
      await axios
        .post("http://localhost:9999/login", { email, password })
        .then((res) => {
          if (res.data.msg == "AUTEMTICACION EXITOSA") {
            setLogged(true);
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("privUser", res.data.userData[0].privUser);
            sessionStorage.setItem("dataUser", res.data.userData[0].fullName);
            sessionStorage.setItem("idClient", res.data.userData[0].id);
          } else {
            setShowAlert(true);
            setAlertMessage(res.data.msg);
            setColorAlert("bg-red-500");
            setAlertMessage("Error");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (prodictId) => {
    try {
      await axios.delete("http://localhost:9999/deleteProducts/" + prodictId);
    } catch (err) {
      console.log(err);
    }
  };

  const addProduct = async ({ formData }) => {
    try {
      await axios
        .post("http://localhost:9999/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setShowAlert(true);
          setAlertMessage(res.data);
          setColorAlert("bg-green-500");
          setAlertTitulo("Exito");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async ({ user }) => {
    try {
      await axios.post("http://localhost:9999/createUser", user).then((res) => {
        if (res.data === "Product uploaded successfully") {
          setShowAlert(true);
          setAlertMessage(res.data);
          setColorAlert("bg-green-500");
          setAlertTitulo("Exito");
        } else if (res.data === "Error inserting data into SQL table") {
          setShowAlert(true);
          setAlertMessage(res.data);
          setColorAlert("bg-red-500");
          setAlertTitulo("Error");
        }
      });
    } catch (err) {
      console.log(err.response.data);
      setShowAlert(true);
      setAlertMessage(err.response.data);
      setColorAlert("bg-red-500");
      setAlertTitulo("Error");
    }
  };

  const logout = async () => {
    try {
      await axios.put("http://localhost:9999/logout").then((res) => {
        if (res.data.msg == "Has sido desconectado") {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("privUser");
          sessionStorage.removeItem("dataUser");
          setLogged(false);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:9999/users");
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const buys = async ({ buyData }) => {
    try {
      await axios.post("http://localhost:9999/buys", buyData).then((res) => {
        setShowAlert(true);
        setAlertMessage(res.data);
        setColorAlert("bg-green-500");
        setAlertTitulo("Mensaje");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const estadoBuy = async (id) => {
    try {
      await axios.put("http://localhost:9999/putBuys", { id }).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBuy = async (id) => {
    try {
      await axios
        .delete("http://localhost:9999/deleteBuy/" + id)
        .then((res) => {
          console.log(res);
        });
      getBuys();
    } catch (err) {
      console.log(err);
    }
  };

  const changeDiscount = async ({ select, discount, id }) => {
    try {
      const res = await axios.post("http://localhost:9999/changeDiscount", {
        select,
        discount,
        id,
      });
      setShowAlert(true);
      setAlertMessage(res.data);
      setColorAlert("bg-green-500");
      setAlertTitulo("Mensaje");
    } catch (err) {
      console.log(err)
      // setShowAlert(true);
      // setAlertMessage(err.response.data);
      // setColorAlert("bg-green-500");
      // setAlertTitulo("Error");
    }
  };


  return (
    <ProductContext.Provider
      value={{
        changeDiscount,
        dataDiscount,
        setAlertTitulo,
        setLoading,
        alertTitulo,
        setVerifiAcount,
        verifiAcount,
        emailUser,
        setEmailUser,
        deleteBuy,
        getBuys,
        estadoBuy,
        dataBuys,
        buys,
        loading,
        UtilesDelHogar,
        Perfumeria,
        Zapatos,
        Ropa,
        Aceo,
        setData,
        data,
        login,
        logout,
        logged,
        addProduct,
        setShowAlert,
        setAlertMessage,
        alertMessage,
        showAlert,
        setColorAlert,
        colorAlert,
        deleteProduct,
        createUser,
        products,
        fetchUsers,
        users,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
