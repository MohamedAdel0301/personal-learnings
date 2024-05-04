type Props = {
  company: string;
  onSelectCompany: React.Dispatch<React.SetStateAction<string>>;
};

const HashtagItem = ({ company, onSelectCompany }: Props) => {
  return (
    <li>
      <button
        onClick={() =>
          onSelectCompany((prev) => {
            if (prev) {
              if (prev === company) return "";
            }
            return company;
          })
        }
      >{`#${company}`}</button>
    </li>
  );
};

export default HashtagItem;
