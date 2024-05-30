import JobList from "./JobList";
import { useJobItemsContext } from "../contexts/JobItemsContextProvider";

const JobListSearch = () => {
  const { jobItemsSliced, isLoading } = useJobItemsContext();
  return <JobList jobItems={jobItemsSliced} isLoading={isLoading} />;
};

export default JobListSearch;
