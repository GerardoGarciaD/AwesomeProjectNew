import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import style from './style';

type Props = {
  firstName: string;
  lastName: string;
  location: string;
  comments: number;
  likes: number;
  bookmarks: number;
};

const UserPost: FC<Props> = ({
  firstName,
  lastName,
  comments,
  likes,
  location,
  bookmarks,
}) => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.userInformationContainer}>
        <View style={style.userInformation}>
          <View style={style.image}>
            <Image
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
          <View>
            <Text style={style.name}>
              {firstName} {lastName}
            </Text>
            {location && <Text style={style.location}>{location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color="#79869F" size={22} />
      </View>
      <View style={style.post}>
        <Image source={require('../../assets/images/default_post.png')} />
      </View>

      <View style={style.userPostStats}>
        <Pressable style={style.userPostStatButton}>
          <FontAwesomeIcon color="#79869F" icon={faHeart} />
          <Text style={style.userPostStatText}>{likes}</Text>
        </Pressable>

        <Pressable style={style.userPostStatButton}>
          <FontAwesomeIcon color="#79869F" icon={faComment} />
          <Text style={style.userPostStatText}>{comments}</Text>
        </Pressable>

        <Pressable style={style.userPostStatButton}>
          <FontAwesomeIcon color="#79869F" icon={faBookmark} />
          <Text style={style.userPostStatText}>{bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserPost;
