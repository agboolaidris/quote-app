import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axiosInstance";

export type Category = {
  _id: string;
  name: string;
  slug: string;
  quoteCount: number;
  dateAdded: string;
  dateModified: string;
};

export const useCategory = () => {
  const path: string[] = ["category"];

  const { data, isLoading: isLoadingQuotes } = useQuery({
    queryKey: path,
    queryFn: async () => {
      const { data } = await axiosInstance.get<Category[]>(`/tags`);
      return data;
    },
  });

  return {
    data: data || [],
    isLoadingQuotes,
  };
};
