import {useFeedbackItemContext} from "../../lib/hooks";
import HashtagItem from "./HashtagItem";

const HashtagList = () => {
  const { companyList, setSelectedCompany } = useFeedbackItemContext();
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={setSelectedCompany}
        />
      ))}
    </ul>
  );
};

export default HashtagList;
