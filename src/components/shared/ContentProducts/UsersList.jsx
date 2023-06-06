import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ProductContext } from "../../../Context/ProductContext";
import ButtonDelete from './ButtonDelete'

const UserList = () => {
  const { setAlertMessage, setShowAlert, setColorAlert, fetchUsers, users } =
    useContext(ProductContext);

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
    <div className="max-w-[1300px] mx-auto text-white shadow-md rounded-md  p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Username</th>
            <th className="py-2 px-4 border">Password</th>
            <th className="py-2 px-4 border">fullName</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Privilege</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border">{user.user}</td>
              <td className="py-2 px-4 border">{user.password}</td>
              <td className="py-2 px-4 border">{user.fullName}</td>
              <td className="py-2 px-4 border">{user.email}</td>
              <td className="py-2 px-4 border">{user.privUser}</td>
              <td className="py-2 px-4 border">
                <ButtonDelete handleDelete={deleteUser} id={user.id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
