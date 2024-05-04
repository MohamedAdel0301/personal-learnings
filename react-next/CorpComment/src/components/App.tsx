import { useEffect, useMemo, useState } from "react";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";
import { FeedbackItemType } from "../lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItemType[]>([]);
  const [isPending, setPending] = useState<boolean>(false);
  const [errorMessage, setErrormessage] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  const companyList: string[] = useMemo(
    () =>
      feedbackItems
        .map((feedbackItem) => feedbackItem.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index; //Filter duplicate items that come later
        }),
    [feedbackItems]
  );

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [selectedCompany, feedbackItems]
  );

  const handleAddItem = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: FeedbackItemType = {
      id: new Date().getTime(),
      text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };
    setFeedbackItems((items) => [...items, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  };

  useEffect(() => {
    const fetchFunction = async () => {
      setPending(true);
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrormessage("An Error has occured");
      } finally {
        setPending(false);
      }
    };
    fetchFunction();
  }, []);

  return (
    <div className="app">
      <Footer />

      <Container
        feedbackItems={filteredFeedbackItems}
        isPending={isPending}
        errorMessage={errorMessage}
        handleAddItem={handleAddItem}
      />

      <HashtagList
        companyList={companyList}
        setSelectedCompany={setSelectedCompany}
      />
    </div>
  );
}

export default App;
