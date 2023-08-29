import { useInfiniteQuery } from "@tanstack/react-query";
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

export const useQuote = (queryParam?: string) => {
  const path: string[] = ["quotes", queryParam || ""];

  const {
    data,
    fetchNextPage,
    isLoading: isLoadingQuotes,
  } = useInfiniteQuery({
    queryKey: path,
    queryFn: async ({ pageParam }) => {
      const page = pageParam?.page + 1 || 1;
      const { data } = await axiosInstance.get<QuoteResponse>(
        `/quotes?page=${page}&${queryParam && queryParam}`
      );
      return data;
    },

    getNextPageParam: (lastPage) => {
      const { results, ...rest } = lastPage;
      return {
        ...rest,
      };
    },
  });

  return {
    ...data,
    isLoadingQuotes,
    fetchNextPage,
  };
};

export const extractQuotesFromResponses = (
  responses: QuoteResponse[]
): Quote[] => {
  const quotes: Quote[] = [];
  for (const response of responses) {
    quotes.push(...response.results);
  }

  return quotes;
};
