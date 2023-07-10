import React, {FC} from 'react';
import {Image, ScrollView, View} from 'react-native';
import style from './style';
type ProfilePostProps = {
  route: any;
};

const ProfilePost: FC<ProfilePostProps> = () => {
  return (
    <ScrollView
      style={style.profileTabPostContainer}
      showsVerticalScrollIndicator={false}>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfilePost;
