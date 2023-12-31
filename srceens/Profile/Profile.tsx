import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../assets/styles/main';
import style from './style';
import {ProfileTabNavigation} from '../../navigation/MainNavigation';
style;

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex1]}>
      <ScrollView>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/default_profile.png')}></Image>
          </View>
        </View>
        <View style={style.userNameContainer}>
          <Text style={style.userName}>Gerardo García</Text>
        </View>
        <View style={style.profileStatsContainer}>
          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>45</Text>
            <Text style={style.singleStatText}>Following</Text>
          </View>
          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>30M</Text>
            <Text style={style.singleStatText}>Followers</Text>
          </View>
          <View style={style.singleStatContainer}>
            <Text style={style.singleStatNumber}>100</Text>
            <Text style={style.singleStatText}>Posts</Text>
          </View>
        </View>
        <View style={style.border} />
        <View style={{height: '100%'}}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
