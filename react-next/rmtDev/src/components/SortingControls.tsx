import { useJobItemsContext } from "../contexts/JobItemsContextProvider";

export default function Sorting() {
  const { handleChangeSortBy, sortBy } = useJobItemsContext();
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>
      <SortButton
        isActive={sortBy === "relevant"}
        onClick={() => handleChangeSortBy("relevant")}
      >
        Relevant
      </SortButton>
      <SortButton
        isActive={sortBy === "recent"}
        onClick={() => handleChangeSortBy("recent")}
      >
        Recent
      </SortButton>
    </section>
  );
}

type SortButtonProps = {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const SortButton = ({ isActive, onClick, children }: SortButtonProps) => {
  return (
    <button
      className={`sorting__button sorting__button--recent ${
        isActive ? "sorting__button--active" : ""
      }`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
