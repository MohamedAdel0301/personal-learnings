import { createContext, useContext } from "react";
import { useLocalStorage } from "usehooks-ts";

type Props = {
  children: React.ReactNode;
};

type BookmarksType = {
  bookmarkedIds: number[];
  handleToggleBookmarked: (id: number) => void;
};

const BookmarksContext = createContext<BookmarksType | null>(null);

const BookmarksContextProvider = ({ children }: Props) => {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>(
    "bookmarkedIds",
    []
  );

  const handleToggleBookmarked = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkedIds((prev) => [...prev, id]);
    }
  };

  return (
    <BookmarksContext.Provider
      value={{ bookmarkedIds, handleToggleBookmarked }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
export default BookmarksContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useBookmarksContext = (): BookmarksType => {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error(
      "useBookmarksContext must be used within a BookmarksContextProvider"
    );
  }
  return context;
};
