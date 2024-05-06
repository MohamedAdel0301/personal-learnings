import { create } from "zustand";
import { FeedbackItemType } from "../../lib/types";
import { feedbacksEndpoint } from "../../lib/constants";

type StoreType = {
  feedbackItems: FeedbackItemType[];
  isPending: boolean;
  errorMessage: string;
  selectedCompany: string;
  getCompanyList: () => string[];
  getFilteredFeedbackItems: () => FeedbackItemType[];
  addItemtoList: (text: string) => void;
  fetchFeedbackItems: () => void;
  selectCompany: (company: string) => void;
};

export const useFeedbackItemStore = create<StoreType>((set, get) => ({
  feedbackItems: [],
  isPending: false,
  errorMessage: "",
  selectedCompany: "",
  getCompanyList: () => {
    return get()
      .feedbackItems.map((item: FeedbackItemType) => item.company)
      .filter((company: string, index: number, array) => {
        return array.indexOf(company) === index;
      });
  },
  getFilteredFeedbackItems: () => {
    const state = get();
    return state.selectedCompany
      ? state.feedbackItems.filter(
          (feedbackItem) => feedbackItem.company === state.selectedCompany
        )
      : state.feedbackItems;
  },
  addItemtoList: async (text: string) => {
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
    // setFeedbackItems((items) => [...items, newItem]);
    set((state) => ({
      feedbackItems: [...state.feedbackItems, newItem],
    }));

    await fetch(feedbacksEndpoint, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  },
  selectCompany: (company: string) => {
    set((state) => {
      const result = state.selectedCompany === company ? "" : company;
      return {
        selectedCompany: result,
      };
    });
  },
  fetchFeedbackItems: async () => {
    set(() => ({
      isPending: true,
    }));
    try {
      const response = await fetch(feedbacksEndpoint);
      const data = await response.json();
      set(() => ({
        feedbackItems: data.feedbacks,
      }));
    } catch (error) {
      set(() => ({
        errorMessage: "An error has occured",
      }));
    } finally {
      set(() => ({
        isPending: false,
      }));
    }
  },
}));
