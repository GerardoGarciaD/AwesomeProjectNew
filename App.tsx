import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main';
import UserStory from './components/UserStory/UserStory';

function App() {
  const data = [
    {
      firstName: 'John',
      id: 1,
    },
    {
      firstName: 'Angel',
      id: 2,
    },
    {
      firstName: 'White',
      id: 3,
    },
    {
      firstName: 'Olivier',
      id: 4,
    },
    {
      firstName: 'Tyler',
      id: 5,
    },
    {
      firstName: 'Stephan',
      id: 6,
    },
    {
      firstName: 'Michael',
      id: 7,
    },
    {
      firstName: 'Tomas',
      id: 8,
    },
    {
      firstName: 'Federic',
      id: 9,
    },
  ];
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedData, setRenderedData] = useState([]);

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

        <View style={style.storyContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => (
              <UserStory firstName={item.firstName} />
            )}></FlatList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
