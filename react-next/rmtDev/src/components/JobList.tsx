import JobListItem from "./JobListItem";
import { JobItem } from "../lib/types";
import Spinner from "./Spinner";

type Props = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export function JobList({ jobItems, isLoading }: Props) {
  return (
    <ul className="job-list">
      {isLoading ? <Spinner /> : null}
      {!isLoading &&
        jobItems.map((jobItem) => (
          <JobListItem jobItem={jobItem} key={jobItem.id} />
        ))}
    </ul>
  );
}

export default JobList;
