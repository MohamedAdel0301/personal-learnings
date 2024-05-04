import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../misc/Logo";
import PageHeading from "../PageHeading";
import Pattern from "../misc/Pattern";

type Props = {
  handleAddItem: (text: string) => void;
};

const Header = ({ handleAddItem }: Props) => {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm handleAddItem={handleAddItem} />
    </header>
  );
};

export default Header;
