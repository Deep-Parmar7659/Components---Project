import { useState } from "react";
import Pagination from "./Pagination";
import PaginationItem from "./PaginationItem";

function PaginationDemo() {
  const [page, setPage] = useState(1);

  return (
    // Removed extra padding
    <div className="p-2">
      <Pagination>
        <PaginationItem onClick={() => setPage(page - 1)}>
          Previous
        </PaginationItem>
        <PaginationItem active={page === 1} onClick={() => setPage(1)}>
          1
        </PaginationItem>
        <PaginationItem active={page === 2} onClick={() => setPage(2)}>
          2
        </PaginationItem>
        <PaginationItem active={page === 3} onClick={() => setPage(3)}>
          3
        </PaginationItem>
        <PaginationItem onClick={() => setPage(page + 1)}>Next</PaginationItem>
      </Pagination>
    </div>
  );
}

export default PaginationDemo;
