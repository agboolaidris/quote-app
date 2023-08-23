import { QuoteCard } from "@/components/commons/QuoteCard";
import { MainWrapper } from "@/components/commons/Wrapper";
import { COLORS } from "@/constants";
import { quotes } from "@/constants/data";
import { useQuoteBookmark } from "@/hooks/useBookmarkQuote";
import { FlatList, View } from "react-native";

const BookmarkQuotes = () => {
  const { bookmarkQuotes } = useQuoteBookmark();
  return (
    <MainWrapper>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={bookmarkQuotes}
        renderItem={({ item }) => <QuoteCard {...item} />}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: COLORS.gray[200] }}></View>
        )}
      />
    </MainWrapper>
  );
};
export default BookmarkQuotes;
