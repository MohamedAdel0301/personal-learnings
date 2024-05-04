import { useState } from "react";

type Props = {
  handleAddItem: (text: string) => void;
};

const MAX_CHARACTERS = 150;

const FeedbackForm = ({ handleAddItem }: Props) => {
  const [text, setText] = useState("");

  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setText(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddItem(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
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