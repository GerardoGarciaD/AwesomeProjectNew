import React from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.header}>
          <Title title="Lets explore"></Title>
          <Pressable style={style.messageIcon}>
            <FontAwesomeIcon size={20} color="#CACDDE" icon={faEnvelope} />
            <View style={style.messageNumberContainer}>
              <Text style={style.messageNumber}>2</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;