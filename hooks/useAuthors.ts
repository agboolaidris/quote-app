import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axiosInstance";

export type Author = {
  _id: string;
  name: string;
  bio: string;
  description: string;
  link: string;
  quoteCount: 0;
  slug: string;
  dateAdded: string;
  dateModified: string;
};

type AuthorResponse = {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex: number;
  results: Author[];
};

export const useAuthor = () => {
  const path: string[] = ["author"];

  const {
    data,
    fetchNextPage,
    isLoading: isLoadingAuthors,
  } = useInfiniteQuery({
    queryKey: path,
    queryFn: async ({ pageParam }) => {
      const page = pageParam?.page + 1 || 1;
      const { data } = await axiosInstance.get<AuthorResponse>(
        `/authors/?page=${page}&sortBy=quoteCount`
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
    isLoadingAuthors,
    fetchNextPage,
  };
};

export const extractAuthorsFromResponses = (
  responses: AuthorResponse[]
): Author[] => {
  const quotes: Author[] = [];
  for (const response of responses) {
    quotes.push(...response.results);
  }

  return quotes;
};
