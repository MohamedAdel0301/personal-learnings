import { forwardRef } from "react";
import { useBookmarksContext } from "../contexts/BookmarksContextProvider";
import JobList from "./JobList";

const BookmarksPopover = forwardRef<HTMLDivElement>((_, ref) => {
  const { jobItems, isLoading } = useBookmarksContext();
  return (
    <div ref={ref} className="bookmarks-popover">
      <JobList jobItems={jobItems} isLoading={isLoading} />
    </div>
  );
});

export default BookmarksPopover;
