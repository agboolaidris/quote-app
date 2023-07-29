import { AuthorCard } from "@/components/commons/AuthorCard";
import { Header } from "@/components/commons/Header";
import { MainWrapper } from "@/components/commons/Wrapper";
import { COLORS } from "@/constants";

import React from "react";
import { Text, View, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const authors = [
  {
    _id: "76ISAUD3P5",
    name: "14th Dalai Lama",
    bio: "The 14th Dalai Lama (né Lhamo Thondup), known as Gyalwa Rinpoche to the Tibetan people, is the current Dalai Lama, the highest spiritual leader and former head of state of Tibet. Born on 6 July 1935, or in the Tibetan calendar, in the Wood-Pig Year, 5th month, 5th day. He is considered a living Bodhisattva; specifically, an emanation of Avalokiteśvara in Sanskrit and Chenrezig in Tibetan.",
    description: "Current foremost spiritual leader of Tibet",
    link: "https://en.wikipedia.org/wiki/14th_Dalai_Lama",
    quoteCount: 0,
    slug: "14th-dalai-lama",
    dateAdded: "2022-07-06",
    dateModified: "2022-07-06",
  },
  {
    _id: "-yBDYq_Vtnuw",
    name: "A. A. Milne",
    link: "https://en.wikipedia.org/wiki/A._A._Milne",
    bio: "Alan Alexander Milne (18 January 1882 – 31 January 1956) was an English author, best known for his books about the teddy bear Winnie-the-Pooh and for various poems. Milne was a noted writer, primarily as a playwright, before the huge success of Pooh overshadowed all his previous work.",
    description: "British author",
    quoteCount: 2,
    slug: "a-a-milne",
    dateAdded: "2019-08-08",
    dateModified: "2019-08-08",
  },
  {
    _id: "Bblz8Knp6-ZB",
    name: "A. P. J. Abdul Kalam",
    link: "https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam",
    bio: "Avul Pakir Jainulabdeen Abdul Kalam (15 October 1931 – 27 July 2015) was an aerospace scientist who served as the 11th President of India from 2002 to 2007.",
    description: "Scientist and 11th President of India",
    quoteCount: 2,
    slug: "a-p-j-abdul-kalam",
    dateAdded: "2019-12-13",
    dateModified: "2019-12-13",
  },
  {
    _id: "N-S5OevQOHpy",
    name: "A. Powell Davies",
    link: "https://en.wikipedia.org/wiki/A._Powell_Davies",
    bio: "Arthur Powell Davies (June 5, 1902 – September 26, 1957) was the minister of All Souls Church, Unitarian in Washington, D.C. from 1944 until his death in 1957. A prolific author of theological books and sermon collections, he came to national prominence in the U.S. through his liberal activism advocating civil rights for African-Americans and women.",
    description: "Civil rights activist",
    quoteCount: 2,
    slug: "a-powell-davies",
    dateAdded: "2020-01-12",
    dateModified: "2020-01-12",
  },
  {
    _id: "82zk1b45Zn",
    name: "Abigail Adams",
    link: "https://en.wikipedia.org/wiki/Abigail_Adams",
    bio: "Abigail Adams (November 22, [O.S. November 11] 1744 – October 28, 1818) was the wife and closest advisor of John Adams, as well as the mother of John Quincy Adams. She is sometimes considered to have been a Founder of the United States, and is now designated as the first Second Lady and second First Lady of the United States, although these titles were not used at the time.",
    description: "2nd First Lady of the United States",
    quoteCount: 1,
    slug: "abigail-adams",
    dateAdded: "2020-04-15",
    dateModified: "2020-04-15",
  },
  {
    _id: "8k75S1ntV9GW",
    name: "Abraham Lincoln",
    link: "https://en.wikipedia.org/wiki/Abraham_Lincoln",
    bio: "Abraham Lincoln (February 12, 1809 – April 15, 1865) was an American statesman and lawyer who served as the 16th president of the United States (1861–1865). Lincoln led the nation through its greatest moral, constitutional, and political crisis in the American Civil War.",
    description: "16th president of the United States",
    quoteCount: 34,
    slug: "abraham-lincoln",
    dateAdded: "2020-01-31",
    dateModified: "2022-03-12",
  },
  {
    _id: "LIMi8MqkzapA",
    name: "Abraham Maslow",
    link: "https://en.wikipedia.org/wiki/Abraham_Maslow",
    bio: "Abraham Harold Maslow (April 1, 1908 – June 8, 1970) was an American psychologist who was best known for creating Maslow's hierarchy of needs, a theory of psychological health predicated on fulfilling innate human needs in priority, culminating in self-actualization.",
    description: "American psychologist",
    quoteCount: 2,
    slug: "abraham-maslow",
    dateAdded: "2020-03-11",
    dateModified: "2020-03-11",
  },
  {
    _id: "I6QJTtjd2k",
    name: "Adam Smith",
    bio: 'Adam Smith (baptized 16 June 1723 – 17 July 1790) was a Scottish economist and philosopher who was a pioneer of political economy and key figure during the Scottish Enlightenment. Also known as "The Father of Economics" or "The Father of Capitalism", he wrote two classic works, The Theory of Moral Sentiments (1759) and An Inquiry into the Nature and Causes of the Wealth of Nations (1776). The latter, often abbreviated as The Wealth of Nations, is considered his magnum opus and the first modern work of economics.',
    description: "Scottish economist and philosopher",
    link: "https://en.wikipedia.org/wiki/Adam_Smith",
    quoteCount: 0,
    slug: "adam-smith",
    dateAdded: "2022-07-06",
    dateModified: "2022-07-08",
  },
  {
    _id: "ossJxB6-1",
    name: "Aeschylus",
    link: "https://en.wikipedia.org/wiki/Aeschylus",
    bio: "Aeschylus was an ancient Greek author of Greek tragedy, and is often described as the father of tragedy. Academics' knowledge of the genre begins with his work, and understanding of earlier Greek tragedy is largely based on inferences made from reading his surviving plays.",
    description: "Ancient Athenian playwright",
    quoteCount: 3,
    slug: "aeschylus",
    dateAdded: "2020-04-15",
    dateModified: "2020-04-15",
  },
  {
    _id: "XYxYtSeixS-o",
    name: "Aesop",
    link: "https://en.wikipedia.org/wiki/Aesop",
    bio: "Aesop (c. 620 – 564 BCE) was a Greek fabulist and storyteller credited with a number of fables now collectively known as Aesop's Fables.",
    description: "Ancient Greek storyteller",
    quoteCount: 10,
    slug: "aesop",
    dateAdded: "2020-01-15",
    dateModified: "2023-04-03",
  },
  {
    _id: "gfyb7CJa5",
    name: "Afrika Bambaataa",
    link: "https://en.wikipedia.org/wiki/Afrika_Bambaataa",
    bio: "Afrika Bambaataa (born Lance Taylor; April 17, 1957) is an American disc jockey, rapper, songwriter and producer from the South Bronx, New York. He is notable for releasing a series of genre-defining electro tracks in the 1980s that influenced the development of hip hop culture.",
    description: "Record producer and activist",
    quoteCount: 1,
    slug: "afrika-bambaataa",
    dateAdded: "2019-03-24",
    dateModified: "2019-03-24",
  },
  {
    _id: "qsGKdgIDw5wR",
    name: "Agatha Christie",
    link: "https://en.wikipedia.org/wiki/Agatha_Christie",
    bio: "Dame Agatha Mary Clarissa Christie, Lady Mallowan,  (15 September 1890 – 12 January 1976) was an English writer known for her 66 detective novels and 14 short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple. She also wrote the world's longest-running play The Mousetrap and six romances under the pen name Mary Westmacott.",
    description: "English mystery writer",
    quoteCount: 1,
    slug: "agatha-christie",
    dateAdded: "2021-01-11",
    dateModified: "2021-01-11",
  },
  {
    _id: "8HD7jXVhDv",
    name: "Akhenaten",
    link: "https://en.wikipedia.org/wiki/Akhenaten",
    bio: "Akhenaten, known before the fifth year of his reign as Amenhotep IV, was an ancient Egyptian pharaoh of the 18th Dynasty, who ruled for 17 years and died perhaps in 1336 BC or 1334 BC. ",
    description: "18th Dynasty pharaoh",
    quoteCount: 1,
    slug: "akhenaten",
    dateAdded: "2021-01-30",
    dateModified: "2021-01-30",
  },
  {
    _id: "EqFOxH8f03zq",
    name: "Alan Cohen",
    link: "https://en.wikipedia.org/wiki/Alan_Cohen",
    bio: "Alan Phillip Cohen (born October 5, 1954) is an American businessman, best known for his ownership of the Florida Panthers hockey team and his founding of several pharmaceutical companies. Cohen holds several degrees from the University of Florida.",
    description: "American hockey executive",
    quoteCount: 1,
    slug: "alan-cohen",
    dateAdded: "2020-01-31",
    dateModified: "2020-01-31",
  },
  {
    _id: "ceimd_kx6Nbh",
    name: "Alan Watts",
    link: "https://en.wikipedia.org/wiki/Alan_Watts",
    bio: "Alan Wilson Watts (6 January 1915 – 16 November 1973) was a British writer and lecturer who interpreted and popularised Eastern philosophy and religion for a Western audience. Born in Chislehurst, England, he moved to the United States in 1938 and began Zen training in New York.",
    description: "British author",
    quoteCount: 22,
    slug: "alan-watts",
    dateAdded: "2021-02-27",
    dateModified: "2022-07-08",
  },
  {
    _id: "RmuonXrXY44Z",
    name: "Albert Camus",
    link: "https://en.wikipedia.org/wiki/Albert_Camus",
    bio: "Albert Camus (7 November 1913 – 4 January 1960) was a French philosopher, author, and journalist. He won the Nobel Prize in Literature at the age of 44 in 1957, the second-youngest recipient in history.",
    description: "French author",
    quoteCount: 6,
    slug: "albert-camus",
    dateAdded: "2021-05-07",
    dateModified: "2021-05-07",
  },
  {
    _id: "L76FRuEeGIUJ",
    name: "Albert Einstein",
    link: "https://en.wikipedia.org/wiki/Albert_Einstein",
    bio: "Albert Einstein (14 March 1879 – 18 April 1955) was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). His work is also known for its influence on the philosophy of science.",
    description: "Theoretical physicist",
    quoteCount: 50,
    slug: "albert-einstein",
    dateAdded: "2019-07-03",
    dateModified: "2023-04-06",
  },
  {
    _id: "ANT0MUtjmG6O",
    name: "Albert Schweitzer",
    link: "https://en.wikipedia.org/wiki/Albert_Schweitzer",
    bio: "Albert Schweitzer  (14 January 1875 – 4 September 1965) was an Alsatian polymath. He was a theologian, organist, writer, humanitarian, philosopher, and physician.",
    description: "Theologian",
    quoteCount: 8,
    slug: "albert-schweitzer",
    dateAdded: "2020-07-10",
    dateModified: "2020-07-10",
  },
  {
    _id: "9B-Gz0CukKAX",
    name: "Aldous Huxley",
    link: "https://en.wikipedia.org/wiki/Aldous_Huxley",
    bio: "Aldous Leonard Huxley (26 July 1894 – 22 November 1963) was an English writer and philosopher. He wrote nearly fifty books—both novels and non-fiction works—as well as wide-ranging essays, narratives, and poems.",
    description: "English author",
    quoteCount: 4,
    slug: "aldous-huxley",
    dateAdded: "2020-04-15",
    dateModified: "2020-04-15",
  },
  {
    _id: "N5lVXx7ZOkGV",
    name: "Alexander Chalmers",
    link: "https://en.wikipedia.org/wiki/Alexander_Chalmers",
    bio: "For the mayor of Warsaw of the same name, see Alexander Chalmers (mayor of Warsaw).  Alexander Chalmers (29 March 1759 – 29 December 1834) was a Scottish writer.",
    description: "Scottish writer",
    quoteCount: 1,
    slug: "alexander-chalmers",
    dateAdded: "2019-11-16",
    dateModified: "2019-11-16",
  },
];

export default function AuthorScreen() {
  return (
    <MainWrapper>
      <FlatList
        ListHeaderComponent={Header}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={authors}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 5,
              width: "33.3%",
            }}
          >
            <AuthorCard {...item} />
          </View>
        )}
        keyExtractor={(item) => item._id}
      />
    </MainWrapper>
  );
}
