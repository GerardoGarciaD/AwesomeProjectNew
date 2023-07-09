/* eslint-disable react/self-closing-comp */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';
import {NavigationContainer} from '@react-navigation/native';

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

  const posts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Sukabumi, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Pondok Leungsir, Jawa Barat',
      likes: 570,
      comments: 12,
      bookmarks: 60,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Boston, Massachusetts',
      likes: 100,
      comments: 8,
      bookmarks: 7,
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, New York',
      likes: 300,
      comments: 18,
      bookmarks: 17,
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 1240,
      comments: 56,
      bookmarks: 20,
      id: 5,
    },
  ];

  const [screenData, setscreenData] = useState(Dimensions.get('screen'));

  console.log(screenData);

  useEffect(() => {
    Dimensions.addEventListener('change', result => {
      console.log('Changed screen data', result.screen);
      setscreenData(result.screen);
    });
  }, []);

  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));

  const pageSizePosts = 2;
  const [pageNumberPosts, setPageNumberPosts] = useState(1);
  const [renderedDataPosts, setRenderedDataPosts] = useState(
    posts.slice(0, pageSizePosts),
  );
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const pagination = (data, pageNumber, pageSize, posts = false) => {
    const startIndex = (pageNumber - 1) * pageSize;
    if (startIndex >= data.length) {
      return [];
    }
    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPageNumberPosts(pageNumber);
    }
    return data.slice(startIndex, startIndex + pageSize);
  };

  return (
    <NavigationContainer>
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title="Lets explore"></Title>
                <Pressable style={style.messageIcon}>
                  <FontAwesomeIcon
                    size={20}
                    color="#CACDDE"
                    icon={faEnvelope}
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </Pressable>
              </View>

              <View style={style.storyContainer}>
                <FlatList
                  //Esto se se utiliza para indicar que se ha llegado a la mitad del scroll y se debe cargar mas data
                  onEndReachedThreshold={0.5}
                  //Aqui es donde se carga mas informacion basado en el numero puesto arriba
                  onEndReached={() => {
                    if (!isLoading) {
                      setIsLoading(true);
                      setRenderedData(prev => [
                        ...prev,
                        ...pagination(data, pageNumber + 1, pageSize),
                      ]);
                      setIsLoading(false);
                    }
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={renderedData}
                  renderItem={({item}) => (
                    <UserStory firstName={item.firstName} />
                  )}
                  keyExtractor={item => item.id.toString()}
                />
              </View>
            </>
          }
          //Esto se se utiliza para indicar que se ha llegado a la mitad del scroll y se debe cargar mas data
          onEndReachedThreshold={0.5}
          //Aqui es donde se carga mas informacion basado en el numero puesto arriba
          onEndReached={() => {
            if (!isLoadingPosts) {
              setIsLoadingPosts(true);
              setRenderedDataPosts(prev => [
                ...prev,
                ...pagination(posts, pageNumberPosts + 1, pageSizePosts, true),
              ]);
              setIsLoadingPosts(false);
            }
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={renderedDataPosts}
          renderItem={({item}) => (
            <View style={style.userPostContainer}>
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                comments={item.comments}
                likes={item.likes}
                location={item.location}
                bookmarks={item.bookmarks}
              />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
