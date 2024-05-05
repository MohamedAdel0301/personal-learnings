import { useState } from "react";
import {useFeedbackItemContext} from "../../lib/hooks";

const MAX_CHARACTERS = 150;

const FeedbackForm = () => {
  const { handleAddItem } = useFeedbackItemContext();
  const [text, setText] = useState("");
  const [validIndicator, setValidIndicator] = useState<boolean>(false);
  const [invalidIndicator, setInvalidIndicator] = useState<boolean>(false);
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setText(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.includes("#") && text.length > 5) {
      setValidIndicator(true);
      setTimeout(() => setValidIndicator(false), 2000);
    } else {
      setInvalidIndicator(true);
      setTimeout(() => setInvalidIndicator(false), 2000);
      return;
    }
    handleAddItem(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form ${validIndicator ? "form--valid" : ""} ${
        invalidIndicator ? "form--invalid" : ""
      }`}
    >
      <textarea
        id="feedback-textarea"
        placeholder="dlasd"
        spellCheck={false}
        value={text}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback, remember to #hashtag the company.
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
