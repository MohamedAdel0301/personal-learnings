import { SortTypes } from "../lib/types";

type Props = {
  onClick: (sortBy: "relevant" | "recent") => void;
  sortBy: SortTypes;
};

export default function Sorting({ onClick, sortBy }: Props) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>
      <SortButton
        isActive={sortBy === "relevant"}
        onClick={() => onClick("relevant")}
      >
        Relevant
      </SortButton>
      <SortButton
        isActive={sortBy === "recent"}
        onClick={() => onClick("recent")}
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
