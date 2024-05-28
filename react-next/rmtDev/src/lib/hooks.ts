import { useQuery } from "@tanstack/react-query";
import { BASE_API_URL } from "./constants";
import { JobItem, JobItemExpanded } from "./types";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

//---------FetchAPI Implementation of Jobs------------
// export const useJobItems = (searchText: string) => {
//   const [jobItems, setJobItems] = useState<JobItem[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   useEffect(() => {
//     if (!searchText) return;
//     async function fetchData() {
//       setIsLoading(true);
//       const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
//       const data = await response.json();
//       setIsLoading(false);
//       setJobItems(data.jobItems);
//     }
//     fetchData();
//   }, [searchText]);
//   return {
//     jobItems,
//     isLoading,
//   };
// };

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

/*******FETCH API IMPLEMENTATION*******/

// export const useJobItem = (activeId: number) => {
//   const [jobItem, setJobItem] = useState<JobItemExpanded | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   useEffect(() => {
//     if (!activeId) return;
//     const fetchJob = async () => {
//       setIsLoading(true);
//       const response = await fetch(`${BASE_API_URL}/${activeId}`);
//       const data = await response.json();
//       setIsLoading(false);
//       setJobItem(data.jobItem);
//     };
//     fetchJob();
//   }, [activeId]);
//   return {
//     jobItem,
//     isLoading,
//   };
// };

type JobItemAPIResponse = {
  public: boolean;
  jobItem: JobItemExpanded;
};

const fetchJobItem = async (
  id: number | null
): Promise<JobItemAPIResponse | null> => {
  if (!id) return null;
  const response = await fetch(`${BASE_API_URL}/${id}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }
  const data = await response.json();
  return data;
};

export const useJobItem = (activeId: number) => {
  const { data, isInitialLoading } = useQuery(
    ["job-item", activeId],
    () => fetchJobItem(activeId),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(activeId),
      onError: (error) => {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An error has occured");
        }
      },
    }
  );
  const jobItem = data?.jobItem;
  return { jobItem, isLoading: isInitialLoading };
};

export const useDebounce = <T>(value: T, delay: number = 1000): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timerID = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timerID);
  }, [value, delay]);
  return debouncedValue;
};

type JobItemsAPIResponse = {
  public: boolean;
  sorted: boolean;
  jobItems: JobItem[];
};

const fetchJobItems = async (
  searchText: string | null
): Promise<JobItemsAPIResponse | null> => {
  if (!searchText) return null;
  const response = await fetch(`${BASE_API_URL}?search=${searchText}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }

  const data = await response.json();
  return data;
};

export const useJobItems = (searchText: string) => {
  const { data, isInitialLoading } = useQuery(
    ["job-items", searchText],
    () => fetchJobItems(searchText),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(searchText),
      onError: (error) => {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An error has occured");
        }
      },
    }
  );
  return { jobItems: data?.jobItems, isLoading: isInitialLoading } as const;
};
