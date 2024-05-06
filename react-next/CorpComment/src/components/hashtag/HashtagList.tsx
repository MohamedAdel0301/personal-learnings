import { useFeedbackItemStore } from "../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

const HashtagList = () => {
  const companyList = useFeedbackItemStore((state) => state.getCompanyList());
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem key={company} company={company} />
      ))}
    </ul>
  );
};

export default HashtagList;
