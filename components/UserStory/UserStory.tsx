import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import style from './style';

type Props = {
  firstName: string;
};

const UserStory: FC<Props> = ({firstName}) => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={require('../../assets/images/default_profile.png')} />
      </View>
      <Text style={style.name}>{firstName}</Text>
    </View>
  );
};

export default UserStory;
