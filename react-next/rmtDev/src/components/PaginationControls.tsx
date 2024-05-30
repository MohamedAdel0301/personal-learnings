import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { DirectionTypes } from "../lib/types";
import { useJobItemsContext } from "../contexts/JobItemsContextProvider";

export default function Pagination() {
  const {
    handleChangePage: onClick,
    currentPage,
    totalNumberOfPages,
  } = useJobItemsContext();
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction="previous"
          currentPage={currentPage}
          onClick={() => onClick("previous")}
        />
      )}
      {totalNumberOfPages > currentPage && (
        <PaginationButton
          direction="next"
          currentPage={currentPage}
          onClick={() => onClick("next")}
        />
      )}
    </section>
  );
}

type PaginationButtonProps = {
  direction: DirectionTypes;
  currentPage: number;
  onClick: () => void;
};
const PaginationButton = ({
  direction,
  currentPage,
  onClick,
}: PaginationButtonProps) => {
  return (
    <button
      className={`pagination__button pagination__button--${direction}`}
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
    >
      {direction === "previous" ? (
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      ) : (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
    </button>
  );
};
