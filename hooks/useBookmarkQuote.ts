import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Quote } from "./useQuote";

export const useQuoteBookmark = () => {
  const path: string[] = ["bookmarkQuote"];
  const key = path.toString();
  const queryClient = useQueryClient();

  const { mutateAsync: addQuoteToBookmark } = useMutation<null, Error, Quote>(
    [],
    async (quote) => {
      try {
        const res: string | null = await AsyncStorage.getItem(key);
        const currentQuotes: Quote[] = res ? JSON.parse(res) : [];
        const updatedQuotes = [...currentQuotes, quote];
        await AsyncStorage.setItem(key, JSON.stringify(updatedQuotes));
        return null;
      } catch (error: any) {
        throw Error(error);
      }
    },
    {
      onSuccess: () => queryClient.invalidateQueries(path),
    }
  );

  const { mutateAsync: removeQuoteToBookmark } = useMutation<
    null,
    Error,
    Quote
  >(
    [],
    async ({ _id }) => {
      try {
        const res: string | null = await AsyncStorage.getItem(key);
        const currentQuotes: Quote[] = res ? JSON.parse(res) : [];
        const updatedQuotes = currentQuotes.filter(
          (quote) => quote._id !== _id
        );
        await AsyncStorage.setItem(key, JSON.stringify(updatedQuotes));
        return null;
      } catch (error: any) {
        throw Error(error);
      }
    },
    {
      onSuccess: () => queryClient.invalidateQueries(path),
    }
  );

  const { data: bookmarkQuotes, isLoading: isLoadingBookMarkQuotes } = useQuery(
    path,
    async () => {
      const res = await AsyncStorage.getItem(key);
      const bookMarkQuotes: Quote[] = res ? JSON.parse(res) : [];

      return bookMarkQuotes;
    }
  );

  return {
    bookmarkQuotes,
    addQuoteToBookmark,
    isLoadingBookMarkQuotes,
    removeQuoteToBookmark,
  };
};
