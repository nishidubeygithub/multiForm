import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/WelcomeScreen';
import DepartmentScreen from '../../screens/DepartmentScreen';
import UserDetailsScreen from '../../screens/userContactDetails/UserDetailsScreen';
import UserNameScreen from '../../screens/userContactDetails/UserNameScreen';
import ThankYouScreen from '../../screens/userContactDetails/ThankYouScreen'

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="DepartmentScreen" component={DepartmentScreen} />
      <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} />
      <Stack.Screen name="UserNameScreen" component={UserNameScreen} />
      <Stack.Screen name="ThankYouScreen" component={ThankYouScreen} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
