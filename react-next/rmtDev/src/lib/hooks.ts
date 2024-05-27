import { JobItem } from "./types";
import { useState, useEffect } from "react";

export const useJobItems = (searchText: string) => {
  const [jobItems, setJobItems] = useState<JobItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!searchText) return;
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );
      const data = await response.json();
      setIsLoading(false);
      setJobItems(data.jobItems);
    }
    fetchData();
  }, [searchText]);
  return {
    jobItems,
    isLoading,
  };
};
