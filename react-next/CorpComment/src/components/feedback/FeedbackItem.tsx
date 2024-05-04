import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedbackItemType } from "../../lib/types";
import { useState } from "react";

type Props = {
  feedbackItem: FeedbackItemType;
};

const FeedbackItem = ({ feedbackItem }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const { upvoteCount, badgeLetter, daysAgo, text, company } = feedbackItem;
  const [upvotes, setUpvotes] = useState<number>(upvoteCount);

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button
        onClick={(e) => {
          setUpvotes((prev) => prev + 1);
          e.currentTarget.disabled = true;
          e.stopPropagation();
        }}
      >
        <TriangleUpIcon />
        <span>{upvotes}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo !== 0 ? `${daysAgo}d ago` : "Today"}</p>
    </li>
  );
};

export default FeedbackItem;
