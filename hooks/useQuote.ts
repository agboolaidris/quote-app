import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axiosInstance";

export type Quote = {
  _id: string;
  author: string;
  content: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};

type QuoteResponse = {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex: number;
  results: Quote[];
};

export const useQuote = () => {
  const path: string[] = ["Quotes"];

  const { data: quotes, isLoading: isLoadingQuotes } = useQuery(
    path,
    async () => {
      const { data } = await axiosInstance.get<QuoteResponse>("/quotes");
      return data.results;
    }
  );

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: path,
    queryFn: async ({ pageParam }) => {
      console.log(pageParam);
      const { data } = await axiosInstance.get<QuoteResponse>("/quotes");
      return data.results;
    },
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  return {
    quotes: quotes || [],
    isLoadingQuotes,
  };
};
