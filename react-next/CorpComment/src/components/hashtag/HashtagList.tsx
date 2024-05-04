import HashtagItem from "./HashtagItem";

type Props = {
  companyList: string[];
  setSelectedCompany: React.Dispatch<React.SetStateAction<string>>;
};

const HashtagList = ({ companyList, setSelectedCompany }: Props) => {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem key={company} company={company} onSelectCompany={setSelectedCompany}  />
      ))}
    </ul>
  );
};

export default HashtagList;
