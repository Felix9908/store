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
  const [colorAlert, setColorAlert] = useState("");
  const [users, setUsers] = useState([]);

  var token = sessionStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
  }

  const grill = products.filter((data1) => data1.type === "grill");

  const coldDishes = products.filter((data1) => data1.type === "coldDishes");

  const hotDishes = products.filter((data1) => data1.type === "hotDishes");

  const soup = products.filter((data1) => data1.type === "soup");

  useEffect(() => {
    const loadData = async () => {
      try {
        await axios.get("http://localhost:9999/data").then((res) => {
          setProducts(res.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
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
          } else {
            setShowAlert(true);
            setAlertMessage(res.data.msg);
            setColorAlert("bg-red-500");
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
        } else if (res.data === "Error inserting data into SQL table") {
          setShowAlert(true);
          setAlertMessage(res.data);
          setColorAlert("bg-red-500");
        }
      });
    } catch (err) {
      console.log(err);
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
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        loading,
        grill,
        coldDishes,
        hotDishes,
        soup,
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
