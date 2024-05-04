import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../misc/Logo";
import PageHeading from "../PageHeading";
import Pattern from "../misc/Pattern";

const Header = () => {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm/>
    </header>
  );
};

export default Header;
