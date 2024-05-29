export type JobItem = {
  badgeLetters: string;
  id: number;
  company: string;
  title: string;
  daysAgo: number;
  relevanceScore: number;
};

export type JobItemExpanded = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
};

export type SortTypes = "relevant" | "recent";

export type DirectionTypes = "next" | "previous";
