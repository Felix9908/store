import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ProductContext } from "../../../Context/ProductContext";
import ButtonDelete from "./ButtonDelete";

const UserList = () => {
  const { setAlertMessage, setShowAlert, setColorAlert, fetchUsers, users, changeMode} =
    useContext(ProductContext);

  console.log(users);

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios
        .delete(`http://localhost:9999/deleteUser/${id}`)
        .then((res) => {
          setShowAlert(true);
          setAlertMessage(res.data);
          setColorAlert("bg-green-500");
          fetchUsers();
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full text-white shadow-md rounded-md overflow-scroll p-4">
      <h1 className="text-xl font-bold mb-4">User List</h1>
      {users.lengrh == 0 ? (
        <>
          <h6>Error al cargar los usuarios</h6>
        </>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th
                className={`py-1 px-2 border ${
                  changeMode ? `` : `text-[#000] border-[#000]`
                }`}
              >
                Username
              </th>
              <th
                className={`py-1 px-2 border ${
                  changeMode ? `` : `text-[#000] border-[#000]`
                }`}
              >
                Password
              </th>
              <th
                className={`py-1 px-2 border ${
                  changeMode ? `` : `text-[#000] border-[#000]`
                }`}
              >
                fullName
              </th>
              <th
                className={`py-1 px-2 border ${
                  changeMode ? `` : `text-[#000] border-[#000]`
                }`}
              >
                Email
              </th>
              <th
                className={`py-1 px-2 border ${
                  changeMode ? `` : `text-[#000] border-[#000]`
                }`}
              >
                Privilege
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td
                  className={`py-1 px-2 border ${
                    changeMode ? `` : `text-[#000] border-[#000]`
                  }`}
                >
                  {user.username}
                </td>
                <td
                  className={`py-1 px-2 border ${
                    changeMode ? `` : `text-[#000] border-[#000]`
                  }`}
                >
                  {user.password}
                </td>
                <td
                  className={`py-1 px-2 border ${
                    changeMode ? `` : `text-[#000] border-[#000]`
                  }`}
                >
                  {user.fullName}
                </td>
                <td
                  className={`py-1 px-2 border ${
                    changeMode ? `` : `text-[#000] border-[#000]`
                  }`}
                >
                  {user.email}
                </td>
                <td
                  className={`py-1 px-2 border ${
                    changeMode ? `` : `text-[#000] border-[#000]`
                  }`}
                >
                  {user.privUser}
                </td>
                <td
                  className={`py-1 px-2 border ${
                    changeMode ? `` : `text-[#000] border-[#000]`
                  }`}
                >
                  <ButtonDelete handleDelete={deleteUser} id={user.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
