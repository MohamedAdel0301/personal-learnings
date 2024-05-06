import { useFeedbackItemStore } from "../stores/feedbackItemsStore";

type Props = {
  company: string;
};

const HashtagItem = ({ company }: Props) => {
  const onSelectCompany = useFeedbackItemStore((state) => state.selectCompany);
  return (
    <li>
      <button onClick={() => onSelectCompany(company)}>{`#${company}`}</button>
    </li>
  );
};

export default HashtagItem;
