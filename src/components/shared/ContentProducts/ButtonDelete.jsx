import { RiDeleteBinLine } from "react-icons/ri";

function ButtonDelete({ handleDelete, id }) {

  return (
    <div>
      <button
        onClick={() => {
          handleDelete(id);
        }}
        className="bg-red-500 p-2 rounded-xl"
      >
        <RiDeleteBinLine className="text-xl" />
      </button>
    </div>
  );
}

export default ButtonDelete;
