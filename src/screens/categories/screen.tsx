import {View, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import {Container} from '../../components/atoms/container';
import QuoteCard from '../../components/molecules/quoteCard';
import CategoryCard from '../../components/molecules/categoyCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CategoryStackParams} from '.';
type Props = NativeStackScreenProps<CategoryStackParams>;

const CategoriesScreen = ({navigation}: Props) => {
  const [data, setData] = useState([
    {
      id: 1,
      content:
        'consectetur  architecto consequatur itaque inventore commodi sit tempora enim quam hic debitis iste exercitationem tenetur voluptates non ab adipisci, perspiciatis fugit.',
      author: 'Loas K.P',
    },
    {
      id: 2,
      content:
        'consectetur  architecto consequatur itaque inventore commodi sit tempora enim quam hic debitis iste exercitationem tenetur voluptates non ab adipisci, perspiciatis fugit.',
      author: 'Loas K.P',
    },
  ]);
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: 'Goal',
      uri: '',
    },
    {
      id: 2,
      title: 'Passion',
      uri: '',
    },
    {
      id: 3,
      title: 'Passion',
      uri: '',
    },
  ]);

  const handleQuotePress = (id: string) => {
    console.log(id);
  };
  const handleQuoteCopy = (id: string) => {
    console.log(id);
  };
  const handleCatogoryPress = (id: string) => {
    navigation.push('category', {id});
  };

  return (
    <Container>
      <View>
        <Carousel
          autoplayInterval={1000}
          data={data}
          autoplay={true}
          autoplayDelay={1000}
          sliderWidth={Dimensions.get('screen').width}
          itemWidth={Dimensions.get('screen').width}
          style={{backgroundColor: 'blue', height: 300}}
          renderItem={({item}: any) => (
            <QuoteCard
              content={item.content}
              author={item.author}
              onCopy={() => handleQuoteCopy('copy)')}
              onLike={() => handleQuoteCopy('hhh)')}
              onDownload={() => handleQuoteCopy('hhh)')}
              onShare={() => handleQuoteCopy('hhh)')}
              onPress={() => handleQuotePress('hhh)')}
            />
          )}
        />
      </View>

      <FlatList
        style={{flexDirection: 'column'}}
        contentContainerStyle={{
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
        keyExtractor={item => item.id.toString()}
        data={categories}
        renderItem={({item}) => (
          <CategoryCard
            {...item}
            onPress={() => handleCatogoryPress(item.id.toString())}
          />
        )}
      />
    </Container>
  );
};

export default CategoriesScreen;
