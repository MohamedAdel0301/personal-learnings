import { FeedbackItemType } from "../../lib/types";
import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";

type Props = {
  feedbackItems: FeedbackItemType[];
  isPending: boolean;
  errorMessage: string;
  handleAddItem: (text: string) => void;
};

const Container = ({
  feedbackItems,
  isPending,
  errorMessage,
  handleAddItem,
}: Props) => {
  return (
    <main className="container">
      <Header handleAddItem={handleAddItem} />
      <FeedbackList
        feedbackItems={feedbackItems}
        isPending={isPending}
        errorMessage={errorMessage}
      />
    </main>
  );
};

export default Container;
