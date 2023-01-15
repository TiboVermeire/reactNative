import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import homeScreen from './screens/homeScreen';
import winkelwagen from './screens/winkelwagen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name = "Winkelwagen" component={winkelwagen}/>
      </Stack.Navigator>
    </NavigationContainer>   
)};

