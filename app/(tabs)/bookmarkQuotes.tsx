import { QuoteCard } from "@/components/commons/QuoteCard";
import { MainWrapper } from "@/components/commons/Wrapper";
import { useQuoteBookmark } from "@/hooks/useBookmarkQuote";
import { CustomFlatList } from "@/components/commons/CustomFlatList";

const BookmarkQuotes = () => {
  const { bookmarkQuotes } = useQuoteBookmark();

  return (
    <MainWrapper>
      <CustomFlatList
        data={bookmarkQuotes}
        renderItem={({ item }) => <QuoteCard {...item} />}
        keyExtractor={(item) => item._id}
        emptyStateText="You've got nothing in your bookmark...yet"
      />
    </MainWrapper>
  );
};
export default BookmarkQuotes;
