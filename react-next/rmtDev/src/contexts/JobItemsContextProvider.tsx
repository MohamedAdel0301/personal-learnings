import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useSearchQuery } from "../lib/hooks";
import { RESULTS_PER_PAGE } from "../lib/constants";
import { SortTypes, DirectionTypes, JobItem } from "../lib/types";
import { useSearchTextContext } from "./SearchTextContextProvider";

type Props = {
  children: React.ReactNode;
};

type JobItemsContextType = {
  isLoading: boolean;
  jobItemsSliced: JobItem[];
  handleChangeSortBy: (newSortBy: SortTypes) => void;
  handleChangePage: (direction: DirectionTypes) => void;
  totalNumberOfPages: number;
  totalNumberofResults: number;
  sortBy: SortTypes;
  currentPage: number;
};

const JobItemsContext = createContext<JobItemsContextType | null>(null);

const JobItemsContextProvider = ({ children }: Props) => {
  const { debouncedSearchText } = useSearchTextContext();
  const [sortBy, setSortBy] = useState<SortTypes>("relevant");
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, jobItems } = useSearchQuery(debouncedSearchText);

  const totalNumberofResults = jobItems?.length || 0;

  const jobItemsSorted = useMemo(
    () =>
      [...(jobItems || [])].sort((a, b) => {
        if (sortBy === "relevant") {
          return b.relevanceScore - a.relevanceScore;
        } else {
          return a.daysAgo - b.daysAgo;
        }
      }),
    [sortBy, jobItems]
  );

  const jobItemsSliced = useMemo(
    () =>
      jobItemsSorted?.slice(
        currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
      ) || [],
    [jobItemsSorted, currentPage]
  );

  const totalNumberOfPages = totalNumberofResults / 7;

  const handleChangePage = useCallback(
    () => (direction: DirectionTypes) => {
      if (direction === "next") {
        setCurrentPage((prev) => prev + 1);
      } else if (direction === "previous") {
        setCurrentPage((prev) => prev - 1);
      }
    },
    []
  );

  const handleChangeSortBy = useCallback(
    () => (newSortBy: SortTypes) => {
      setCurrentPage(1);
      setSortBy(newSortBy);
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      isLoading,
      jobItemsSliced,
      handleChangeSortBy,
      handleChangePage,
      totalNumberOfPages,
      totalNumberofResults,
      sortBy,
      currentPage,
    }),
    [
      isLoading,
      jobItemsSliced,
      handleChangeSortBy,
      handleChangePage,
      totalNumberOfPages,
      totalNumberofResults,
      sortBy,
      currentPage,
    ]
  );

  return (
    <JobItemsContext.Provider value={contextValue}>
      {children}
    </JobItemsContext.Provider>
  );
};
export default JobItemsContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useJobItemsContext = () => {
  const context = useContext(JobItemsContext);
  if (!context) {
    throw new Error(
      "useJobItemsContext must be used within a JobItemsContextProvider"
    );
  }
  return context;
};
