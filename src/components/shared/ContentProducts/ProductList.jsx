import Card from "../Card";
import { RiArrowDownSLine, RiSearch2Line } from "react-icons/ri";
import { useContext, useState, useEffect } from "react";
import PaginationButtons from "../../PaginationButtons";

function ProductList({ data1 }) {
  const totalItems = 8;
  const [filteredList, setFilteredList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const filter = (e) => {
    if (e == undefined) {
      if (currentPage == 2) {
        setFilteredList([...data1].splice(8, totalItems));
      } else {
        setFilteredList([...data1].splice(0, totalItems));
      }
      setTotalPages(data1.length / totalItems);
    } else {
      setFilteredList(
        data1.filter((f) => f.tipe.toLowerCase().includes(e.target.value))
      );
    }
  };

  useEffect(() => {
    filter();
  }, [data1, currentPage]);

  return (
    <div>
      <div className="flex items-center justify-between  mb-20">
        <h2 className="text-xl text-gray-300 ">Choose Dishes</h2>
        <form className="mr-[40px]">
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              onChange={filter}
              className="bg-[#1F1D2B] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 outlie-none"
              placeholder="Search"
            />
          </div>
        </form>
        <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
          <RiArrowDownSLine />
          Dine in
        </button>
      </div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
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
