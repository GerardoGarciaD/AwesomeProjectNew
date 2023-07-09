import {createStackNavigator} from '@react-navigation/stack';
import Home from '../srceens/Home/Home';
import Profile from '../srceens/Profile/Profile';
import Routes from './Routes';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      // Esto  es para que no se muestre el header (el titulo de la pagina en la parte superior)
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
