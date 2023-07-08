import React, {FC} from 'react';
import {Text} from 'react-native';
import style from './style';

type Props = {
  title: string;
};

const Title: FC<Props> = ({title}) => {
  return <Text style={style.title}>{title}</Text>;
};

export default Title;
