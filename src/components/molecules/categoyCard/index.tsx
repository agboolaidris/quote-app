import {Image, Pressable, View} from 'react-native';
import React from 'react';
import {CategoryCardWrapper} from './style';
import {Text} from '../../atoms/text';

interface CategoryCardProps {
  title: string;
  uri: string;
  onPress: () => void;
}

const CategoryCard = ({title, uri, onPress}: CategoryCardProps) => {
  return (
    <Pressable onPress={onPress}>
      <CategoryCardWrapper>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2017/10/25/19/45/arrows-2889040__340.jpg',
          }}
          style={{width: '100%', height: 150, borderRadius: 10}}
        />
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}} color="compliment">
            {title}
          </Text>
        </View>
      </CategoryCardWrapper>
    </Pressable>
  );
};

export default CategoryCard;
