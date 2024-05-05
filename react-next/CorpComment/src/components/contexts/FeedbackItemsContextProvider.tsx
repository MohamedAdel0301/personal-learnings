import { createContext, useMemo, useState } from "react";
import { FeedbackItemType } from "../../lib/types";
import { feedbacksEndpoint } from "../../lib/constants";
import { useFeedbackItems } from "../../lib/hooks";

type FeedbackItemsContextType = {
  feedbackItems: FeedbackItemType[];
  isPending: boolean;
  errorMessage: string;
  handleAddItem: (text: string) => void;
  companyList: string[];
  filteredFeedbackItems: FeedbackItemType[];
  setSelectedCompany: React.Dispatch<React.SetStateAction<string>>;
};

export const FeedbackItemsContext =
  createContext<FeedbackItemsContextType | null>(null);

const FeedbackItemsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const { isPending, setFeedbackItems, feedbackItems, errorMessage } =
    useFeedbackItems();
  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [selectedCompany, feedbackItems]
  );
  const companyList: string[] = useMemo(
    () =>
      feedbackItems
        .map((feedbackItem) => feedbackItem.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index; //Filter duplicate items that come later
        }),
    [feedbackItems]
  );
  const handleAddItem = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: FeedbackItemType = {
      id: new Date().getTime(),
      text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };
    setFeedbackItems((items) => [...items, newItem]);

    await fetch(feedbacksEndpoint, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };
  return (
    <FeedbackItemsContext.Provider
      value={{
        feedbackItems,
        isPending,
        errorMessage,
        handleAddItem,
        companyList,
        filteredFeedbackItems,
        setSelectedCompany,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
};

export default FeedbackItemsContextProvider;
