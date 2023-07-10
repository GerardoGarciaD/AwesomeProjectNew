import React, {FC} from 'react';
import {Text} from 'react-native';
import style from './style';

type Props = {
  isFocused: boolean;
  titlle: string;
};

const ProfileTabTitle: FC<Props> = ({titlle, isFocused}) => {
  return (
    <Text
      style={[
        style.titile,
        {
          color: isFocused ? '#022150' : '#79869F',
          fontWeight: isFocused ? '500' : '400',
        },
      ]}>
      {titlle}
    </Text>
  );
};

export default ProfileTabTitle;
