import { Empty } from "@/components/commons/Empty";
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
        ListEmptyComponent={<Empty />}
      />
    </MainWrapper>
  );
};
export default BookmarkQuotes;
