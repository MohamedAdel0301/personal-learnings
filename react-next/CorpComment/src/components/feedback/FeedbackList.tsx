import FeedbackItem from "./FeedbackItem";
import Spinner from "../misc/Spinner";
import ErrorMessage from "../ErrorMessage";
import { FeedbackItemType } from "../../lib/types";

type Props = {
  feedbackItems: FeedbackItemType[];
  isPending: boolean;
  errorMessage: string;
};

const FeedbackList = ({ feedbackItems, isPending, errorMessage }: Props) => {
  return (
    <ol className="feedback-list">
      {isPending && <Spinner />}
      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
