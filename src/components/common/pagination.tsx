import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";

type PaginationProps = {
  currentPage: number;
  lastPage: number;
  onPageChange: (page: number) => void;
};

const CustomPagination = (props: PaginationProps) => {
    return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={props.currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            isActive={props.currentPage!==1}
            onClick={() => props.onPageChange(props.currentPage - 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={props.currentPage === props.lastPage ? "pointer-events-none opacity-50" : ""}
            isActive={props.currentPage!==props.lastPage}
            onClick={() => props.onPageChange(props.currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    )
}


export default CustomPagination;