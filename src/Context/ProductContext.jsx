import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
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
  const [changeMode, setchangeMode] = useState(false);

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
        "Bienvenido a nuestra aplicacion de tienda online, inicie sesión para empezar a comprar"
      );
      setColorAlert("bg-green-500");
      setAlertTitulo("Bienvenido");
    }
  }, []);

  const UtilesDelHogar = products.filter(
    (data1) => data1.type === "UtilesDelHogar"
  );

  const getBuys = async () => {
    try {
      await axios.get("https://back-endstore-production.up.railway.app/getbuys").then((res) => {
        const privUser = sessionStorage.getItem("privUser");
        setLoading(false);
        const id = sessionStorage.getItem("idClient");
        const data = res.data;
        if (privUser == "Cliente") {
          const resultData = data.filter(
            (compra) =>
              compra.cliente_id === parseInt(id, 10) &&
              compra.estadoEntCliente === "pendiente"
          );
          setDataBuys(resultData);
        } else {
          setDataBuys(res.data);
        }
      });
    } catch (err) {
      setShowAlert(true);
      setAlertMessage("Error al conectar con la base de datos");
      setColorAlert("bg-red-500");
      setAlertTitulo("Error");
    }
  };

  useEffect(() => {
    if (logged) {
      getBuys();
    }
  }, [logged]);

  const Perfumeria = products.filter((data1) => data1.type === "Perfumeria");

  const Zapatos = products.filter((data1) => data1.type === "Zapatos");

  const Ropa = products.filter((data1) => data1.type === "Ropa");

  const Aceo = products.filter((data1) => data1.type === "Aceo");

  const getTienda = async () => {
    try {
      const res = await axios.get("https://back-endstore-production.up.railway.app/getTienda");
      setDataDiscount(res.data[0]);
    } catch (err) {
      setShowAlert(true);
      setAlertMessage("Error al conectar con la base de datos");
      setColorAlert("bg-red-500");
      setAlertTitulo("Error");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        await axios.get("https://back-endstore-production.up.railway.app/data").then((res) => {
          setProducts(res.data);
          setLoading(false);
        });
      } catch (err) {
        setShowAlert(true);
        setAlertMessage("Error al conectar con la base de datos");
        setColorAlert("bg-red-500");
        setAlertTitulo("Error");
      }
      const mode = sessionStorage.getItem("mode");
      if (mode == 1) {
        setchangeMode(true);
      } else {
        false;
      }
    };

    const dataUserLogin = sessionStorage.getItem("dataUserLogin");
    if (dataUserLogin && dataUserLogin.length > 0) {
      setVerifiAcount(true);
    }

    loadData();
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

  const login = async ({ userName, password }) => {
    try {
      await axios
        .post("https://back-endstore-production.up.railway.app/login", { userName, password })
        .then((res) => {
          if (res.data.msg == "AUTEMTICACION EXITOSA") {
            setLogged(true);
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("privUser", res.data.userData[0].privUser);
            sessionStorage.setItem("dataUser", res.data.userData[0].fullName);
            sessionStorage.setItem("idClient", res.data.userData[0].id);
            sessionStorage.setItem("mode", res.data.userData[0].mode);
            if (res.data.userData[0].mode == 1) {
              setchangeMode(true);
            }
          } else {
            setShowAlert(true);
            setAlertMessage(res.data.msg);
            setColorAlert("bg-red-500");
            setAlertTitulo("Error");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (prodictId) => {
    const isConfirmed = window.confirm("¿Estás seguro de que deseas borrar?");
    if (isConfirmed) {
      try {
        await axios.delete("https://back-endstore-production.up.railway.app/deleteProducts/" + prodictId);
      } catch (err) { 
        setShowAlert(true);
        setAlertMessage(err.response.data);
        setColorAlert("bg-red-500");
        setAlertTitulo("Error");
      }
    }
  };

  const addProduct = async ({ formData }) => {
    try {
      await axios
        .post("https://back-endstore-production.up.railway.app/create", formData, {
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
      await axios.post("https://back-endstore-production.up.railway.app/createUser", user).then((res) => {
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
      await axios.put("https://back-endstore-production.up.railway.app/logout").then((res) => {
        if (res.data.msg == "Has sido desconectado") {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("privUser");
          sessionStorage.removeItem("dataUser");
          sessionStorage.removeItem("idClient");
          sessionStorage.removeItem("mode");
          setDataDiscount("");
          setEmailUser("");
          setColorAlert("");
          setAlertTitulo("");
          setAlertMessage("");
          setLogged(false);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://back-endstore-production.up.railway.app/users");
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

 

  const estadoVendedorBuy = async (id) => {
    try {
      await axios
        .put("https://back-endstore-production.up.railway.app/putBuysVendedor", { id })
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const estadoClienteBuy = async (id) => {
    try {
      await axios
        .put("https://back-endstore-production.up.railway.app/putBuysCliente", { id })
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBuy = async (id) => {
    const isConfirmed = window.confirm("¿Estás seguro de que deseas borrar?");
    if (isConfirmed) {
      try {
        await axios
          .delete("https://back-endstore-production.up.railway.app/deleteBuy/" + id)
          .then((res) => {
            setShowAlert(true);
            setAlertMessage(res.data);
            setColorAlert("bg-green-500");
            setAlertTitulo("Mensaje");
          });
        getBuys();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const changeDiscount = async ({ select, discount, id }) => {
    try {
      const res = await axios.post("https://back-endstore-production.up.railway.app/changeDiscount", {
        select,
        discount,
        id,
      });
      setShowAlert(true);
      setAlertMessage(res.data);
      setColorAlert("bg-green-500");
      setAlertTitulo("Mensaje");
    } catch (err) {
      console.log(err);
      setShowAlert(true);
      setAlertMessage(err.response.data);
      setColorAlert("bg-green-500");
      setAlertTitulo("Error");
    }
  };

  const uptateAvailable = async ({ newAvailable, id }) => {
    try {
      const res = await axios.post("https://back-endstore-production.up.railway.app/updateAvailable", {
        newAvailable,
        id,
      });
      setShowAlert(true);
      setAlertMessage(res.data);
      setColorAlert("bg-green-500");
      setAlertTitulo("Mensaje");
    } catch (err) {
      setShowAlert(true);
      setAlertMessage(err.response.data);
      setColorAlert("bg-green-500");
      setAlertTitulo("Error");
    }
  };

  const changeModeApp = () => {
    setTimeout(async () => {
      try {
        const id = sessionStorage.getItem("idClient");
        let newModeValue;
        if (changeMode == false) {
          sessionStorage.removeItem("mode");
          newModeValue = 1;
          sessionStorage.setItem("mode", 1);
        } else {
          sessionStorage.removeItem("mode");
          newModeValue = 0;
          sessionStorage.setItem("mode", 0);
        }
        const res = await axios.put("https://back-endstore-production.up.railway.app/changeMode", {
          newModeValue,
          id,
        });
      } catch (err) {
        setShowAlert(true);
        setAlertMessage(err.response.msg);
        setColorAlert("bg-red-500");
        setAlertMessage("Error");
      }
    }, 5000);
  };

  return (
    <ProductContext.Provider
      value={{
        changeModeApp,
        changeMode,
        setchangeMode,
        uptateAvailable,
        estadoClienteBuy,
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
        estadoVendedorBuy,
        dataBuys,
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
