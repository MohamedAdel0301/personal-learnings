import FeedbackItem from "./FeedbackItem";
import Spinner from "../misc/Spinner";
import ErrorMessage from "../ErrorMessage";
import {useFeedbackItemContext} from "../../lib/hooks";

const FeedbackList = () => {
  const { isPending, errorMessage, filteredFeedbackItems } =
    useFeedbackItemContext();
  return (
    <ol className="feedback-list">
      {isPending && <Spinner />}
      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
