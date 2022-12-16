import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../../screens/MainScreen';
import StackScreen from '../../screens/StackScreen';
import LoginScreen from '../../screens/userDetails/LoginScreen';
import UserInfoScreen from '../../screens/userDetails/UserInfoScreen';
import CompanyDetailsScreen from '../../screens/userDetails/CompanyDetailsScreen'

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="StackScreen" component={StackScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
      <Stack.Screen name="CompanyDetailsScreen" component={CompanyDetailsScreen} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
