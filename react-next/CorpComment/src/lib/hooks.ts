import { useContext, useEffect, useState } from "react";
import { FeedbackItemsContext } from "../components/contexts/FeedbackItemsContextProvider";
import { feedbacksEndpoint } from "./constants";
import { FeedbackItemType } from "./types";

export const useFeedbackItemContext = () => {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error("Context used outside boundaries");
  }
  return context;
};

export const useFeedbackItems = () => {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItemType[]>([]);
  const [isPending, setPending] = useState<boolean>(false);
  const [errorMessage, setErrormessage] = useState<string>("");
  useEffect(() => {
    const fetchFunction = async () => {
      setPending(true);
      try {
        const response = await fetch(feedbacksEndpoint);
        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrormessage("An Error has occured");
      } finally {
        setPending(false);
      }
    };
    fetchFunction();
  }, []);
  return {
    feedbackItems,
    isPending,
    errorMessage,
    setFeedbackItems,
  };
};
