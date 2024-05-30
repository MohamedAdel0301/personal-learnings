import { createContext, useContext, useState } from "react";
import { useDebounce } from "../lib/hooks";

type Props = {
  children: React.ReactNode;
};

type SearchTextContextType = {
  searchText: string;
  debouncedSearchText: string;
  handleChangeSearchText: (searchText: string) => void;
};

const SearchTextContext = createContext<SearchTextContextType | null>(null);

const SearchTextContextProvider = ({ children }: Props) => {
  const [searchText, setSearchText] = useState<string>("");
  const debouncedSearchText = useDebounce(searchText, 500);

  const handleChangeSearchText = (searchText: string) => {
    setSearchText(searchText);
  };

  return (
    <SearchTextContext.Provider
      value={{
        searchText,
        debouncedSearchText,
        handleChangeSearchText,
      }}
    >
      {children}
    </SearchTextContext.Provider>
  );
};
export default SearchTextContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useSearchTextContext = () => {
  const context = useContext(SearchTextContext);
  if (!context) {
    throw new Error(
      "useSearchTextContext must be used within a SearchTextContextProvider"
    );
  }
  return context;
};
