import { useJobItemsContext } from "../contexts/JobItemsContextProvider";

export default function ResultsCount() {
  const { totalNumberofResults } = useJobItemsContext();
  return (
    <p className="count">
      <span className="u-bold">{totalNumberofResults}</span> results
    </p>
  );
}
