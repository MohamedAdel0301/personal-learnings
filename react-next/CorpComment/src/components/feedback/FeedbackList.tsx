import FeedbackItem from "./FeedbackItem";
import Spinner from "../misc/Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemStore } from "../stores/feedbackItemsStore";

const FeedbackList = () => {
  const isPending = useFeedbackItemStore((state) => state.isPending);
  const errorMessage = useFeedbackItemStore((state) => state.errorMessage);
  const filteredFeedbackItems = useFeedbackItemStore((state) =>
    state.getFilteredFeedbackItems()
  );
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
