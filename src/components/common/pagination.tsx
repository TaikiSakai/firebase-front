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
        {props.currentPage < props.lastPage - 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                className={props.currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                isActive
                onClick={() => props.onPageChange(props.currentPage-1)}
              >
                {props.currentPage}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => props.onPageChange(props.currentPage + 1)}>
                {props.currentPage + 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => props.onPageChange(props.currentPage + 2)}>
                {props.currentPage+2}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}

        {props.currentPage >= props.lastPage - 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                className={props.currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                onClick={() => props.onPageChange(1)}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                isActive={props.currentPage===props.lastPage-1}
                onClick={() => props.onPageChange(props.lastPage-1)}
                className={props.currentPage === props.lastPage-1 ? "pointer-events-none opacity-50" : ""}
              >
                {props.lastPage-1}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                isActive={props.currentPage===props.lastPage}
                className={props.currentPage === props.lastPage ? "pointer-events-none opacity-50" : ""}
                onClick={() => props.onPageChange(props.lastPage)}
              >
                {props.lastPage}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
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