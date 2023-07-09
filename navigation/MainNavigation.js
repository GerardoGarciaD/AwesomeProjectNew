import {createStackNavigator} from '@react-navigation/stack';
import Home from '../srceens/Home/Home';
import Profile from '../srceens/Profile/Profile';
import Routes from './Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
