import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Container} from '../../components/atoms/container';
import CategoryCard from '../../components/molecules/categoyCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthorsStackParams} from '../../navigations/type';
type Props = NativeStackScreenProps<AuthorsStackParams>;
const AuthorsScreen = ({navigation}: Props) => {
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
    {
      id: 4,
      title: 'Passion',
      uri: '',
    },
    {
      id: 5,
      title: 'Passion',
      uri: '',
    },
    {
      id: 6,
      title: 'Passion',
      uri: '',
    },
    {
      id: 7,
      title: 'Passion',
      uri: '',
    },
    {
      id: 8,
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
    navigation.push('author', {id});
  };
  return (
    <Container>
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

export default AuthorsScreen;
