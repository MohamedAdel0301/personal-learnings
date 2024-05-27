import JobListItem, { JobItem } from "./JobListItem";

type Props = {
  jobItems: JobItem[];
};

export function JobList({ jobItems }: Props) {
  return (
    <ul className="job-list">
      {jobItems.map((jobItem) => (
        <JobListItem jobItem={jobItem} key={jobItem.id} />
      ))}
    </ul>
  );
}

export default JobList;
