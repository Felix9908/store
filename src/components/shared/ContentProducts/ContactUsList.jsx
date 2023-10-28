import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ButtonDelete from "./ButtonDelete";
import { ProductContext } from "../../../Context/ProductContext";

function ContactUsList() {
  const [contacts, setContacts] = useState([]);
  const { setAlertMessage, setShowAlert, setColorAlert } =
    useContext(ProductContext);

  useEffect(() => {
    loadMessage();
  }, []);

  const loadMessage = async () => {
    try {
      await axios
        .get("http://localhost:9999/contactUsData")
        .then((response) => {
          setContacts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios
        .delete(`http://localhost:9999/contactUs/delete/${id}`)
        .then((res) => {
          setShowAlert(true);
          setAlertMessage(res.data);
          setColorAlert("bg-green-500");
          loadMessage();
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Client messages</h1>
      {contacts.length == 0 ? (
        <>
          <p className="text-white text-xl">No messages yet</p>
        </>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="flex items-center mb-4 overflow-hidden"
            >
              <div className="bg-white rounded-lg shadow w-[800px] p-6">
                <p className="text-lg font-medium mb-2 ">{contact.name}</p>
                <p className="text-gray-600 mb-2">{contact.email}</p>
                <p className="text-gray-800 inline-block max-w-full ">
                  {contact.message}
                </p>
              </div>
              <ButtonDelete handleDelete={deleteMessage} id={contact.id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactUsList;
