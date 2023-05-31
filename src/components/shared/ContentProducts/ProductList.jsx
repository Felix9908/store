import Card from "../Card";
import { RiArrowDownSLine, RiSearch2Line } from "react-icons/ri";
import { useContext, useState, useEffect } from "react";
import PaginationButtons from "../../PaginationButtons";
import { ProductContext } from "../../../Context/ProductContext";

function ProductList({ data1 }) {
  const [filteredList, setFilteredList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [searchValue, setSearchValue] = useState("");


  const filter = (e) => {
    const value = e?.target?.value || "";
    setSearchValue(value.toLowerCase());
  
    if (!e) {
      setCurrentPage(0);
    }
    setFilteredList(
      data1.filter((f) => f.productName.toLowerCase().includes(value))
    );
  };
  

  useEffect(() => {
    setFilteredList([...data1]);
  }, [data1]);

  useEffect(() => {
    setFilteredList(data1); // Restaurar la lista original
  
    const filteredItems = data1.filter((f) =>
      f.productName.toLowerCase().includes(searchValue)
    );
  
    const totalItems = filteredItems.length;
    setTotalPages(Math.ceil(totalItems / itemsPerPage));
    setCurrentPage(0);
  
    setFilteredList(filteredItems.slice(0, itemsPerPage)); // Establecer la lista filtrada inicial
  }, [data1, itemsPerPage, searchValue]);

  useEffect(() => {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  setFilteredList(data1.slice(startIndex, endIndex));
}, [currentPage, itemsPerPage, data1]);
  

  return (
    <div>
      <div className="flex items-center justify-between mb-20">
        <h2 className="text-xl text-gray-300">Choose Dishes</h2>
        <form className="mr-[40px]">
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              onChange={filter}
              className="bg-[#1F1D2B] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Search"
            />
          </div>
        </form>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg"
        >
          <option value={8}>Show 8</option>
          <option value={10}>Show 10</option>
          <option value={50}>Show 50</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
        {filteredList.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
      <PaginationButtons
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default ProductList;
