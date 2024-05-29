import { useBookmarksContext } from "../contexts/BookmarksContextProvider";
import JobList from "./JobList";

export default function BookmarksPopover() {
  const { jobItems, isLoading } = useBookmarksContext();
  return (
    <div className="bookmarks-popover">
      <JobList jobItems={jobItems} isLoading={isLoading} />
    </div>
  );
}
