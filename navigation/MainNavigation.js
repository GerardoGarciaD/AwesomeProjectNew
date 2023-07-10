import {createStackNavigator} from '@react-navigation/stack';
import Home from '../srceens/Home/Home';
import Profile from '../srceens/Profile/Profile';
import Routes from './Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tab 1</Text>
    </View>
  );
};
const Tab2 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tab 2</Text>
    </View>
  );
};
const Tab3 = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tab 3</Text>
    </View>
  );
};

export const ProfileTabNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          elevation: 0,
          zIndex: 0,
        },
      }}>
      <ProfileTabs.Screen
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle isFocused={focused} titlle="Photos" />;
          },
        }}
        name="Tab1"
        component={Tab1}
      />
      <ProfileTabs.Screen
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle isFocused={focused} titlle="Videos" />;
          },
        }}
        name="Tab2"
        component={Tab2}
      />
      <ProfileTabs.Screen
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle isFocused={focused} titlle="Saved" />;
          },
        }}
        name="Tab3"
        component={Tab3}
      />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      // Esto  es para que no se muestre el header (el titulo de la pagina en la parte superior)
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name="Drawer" component={MainMenuNavigation}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigation;
