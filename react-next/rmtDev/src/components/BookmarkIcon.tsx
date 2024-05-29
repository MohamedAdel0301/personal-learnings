import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarksContext } from "../contexts/BookmarksContextProvider";

export default function BookmarkIcon({ id }: { id: number }) {
  
  const { bookmarkedIds, handleToggleBookmarked } = useBookmarksContext();

  const isActive = bookmarkedIds.includes(id);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleToggleBookmarked(id);
        e.stopPropagation();
      }}
      className="bookmark-btn"
    >
      <BookmarkFilledIcon className={`${isActive ? "filled" : ""}`} />
    </button>
  );
}
