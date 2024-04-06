import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link, useParams, useNavigate } from "react-router-dom";

const PaginationPage = () => {
  const { stepId } = useParams();
  const navigate = useNavigate();
  const currentPage: number = (stepId && parseInt(stepId)) || 1;
  const pageCount = 3;

  const handlePrevious = (currentPage: number) => {
    if (currentPage <= 1) {
      return;
    }
    navigate(`/step/${currentPage - 1}`);
  };

  const handleNext = (currentPage: number) => {
    if (currentPage < pageCount) {
      navigate(`/step/${currentPage + 1}`);
    }
  };

  return (
    <Pagination className="row-span-1 ">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePrevious(currentPage)} />
        </PaginationItem>
        <PaginationItem
          className={`${
            currentPage === 1 && "outline outline-1 outline-primary"
          }`}
        >
          <Link to={`/step/1`}>
            <PaginationLink>1</PaginationLink>
          </Link>
        </PaginationItem>
        <PaginationItem
          className={`${
            currentPage === 2 && "outline outline-1 outline-primary"
          }`}
        >
          <Link to={`/step/2`}>
            <PaginationLink>2</PaginationLink>
          </Link>
        </PaginationItem>
        <PaginationItem
          className={`${
            currentPage === 3 && "outline outline-1 outline-primary"
          }`}
        >
          <Link to={`/step/3`}>
            <PaginationLink>3</PaginationLink>
          </Link>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem onClick={() => handleNext(currentPage)}>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationPage;
