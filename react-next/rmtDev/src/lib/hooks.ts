import { BASE_API_URL } from "./constants";
import { JobItem, JobItemExpanded } from "./types";
import { useState, useEffect } from "react";

export const useJobItems = (searchText: string) => {
  const [jobItems, setJobItems] = useState<JobItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
      const data = await response.json();
      setIsLoading(false);
      setJobItems(data.jobItems);
    }
    fetchData();
  }, [searchText]);
  return {
    jobItems: jobItemsSliced,
    isLoading,
  };
};

export const useActiveId = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = +window.location.hash.slice(1);
      setActiveId(id);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return { activeId };
};

export const useJobItem = (activeId: number) => {
  const [jobItem, setJobItem] = useState<JobItemExpanded | null>(null);

  useEffect(() => {
    if (!activeId) return;
    const fetchJob = async () => {
      const response = await fetch(`${BASE_API_URL}/${activeId}`);
      const data = await response.json();
      setJobItem(data.jobItem);
    };
    fetchJob();
  }, [activeId]);
  return jobItem;
};
