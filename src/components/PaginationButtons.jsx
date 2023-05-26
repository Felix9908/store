import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const PaginationButtons = ({ totalPages, setCurrentPage }) => {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      variants={paginationVariants}
      initial="hidden"
      animate="visible"
    >
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          <samp className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md">
            <BsChevronRight />
          </samp>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel={
          <samp className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md">
            <BsChevronLeft />
          </samp>
        }
        containerClassName="flex items-center justify-center mt-8 mb-4"
        pageClassName="block border- border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4"
        activeClassName="bg-purple text-white"
      />
    </motion.div>
  );
};

export default PaginationButtons;
