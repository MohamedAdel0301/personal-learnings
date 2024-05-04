import { useContext } from "react";
import { FeedbackItemsContext } from "./FeedbackItemsContextProvider";

const useFeedbackItemContext = () => {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error("Context used outside boundaries");
  }
  return context;
};

export default useFeedbackItemContext;
