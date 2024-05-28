import JobListItem from "./JobListItem";
import { JobItem } from "../lib/types";
import Spinner from "./Spinner";
import { useActiveId } from "../lib/hooks";

type Props = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export function JobList({ jobItems, isLoading }: Props) {
  const { activeId } = useActiveId();
  return (
    <ul className="job-list">
      {isLoading ? <Spinner /> : null}
      {!isLoading &&
        jobItems.map((jobItem) => (
          <JobListItem
            jobItem={jobItem}
            key={jobItem.id}
            isActive={jobItem.id === activeId}
          />
        ))}
    </ul>
  );
}

export default JobList;
