import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import homeScreen from './screens/homeScreen';
import winkelwagen from './screens/winkelwagen';
import snackAli from './screens/snackAli';
import detailScreen from './screens/detailScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name = "Winkelwagen" component={winkelwagen}/>
        <Stack.Screen name = "Ali" component={snackAli}/>
        <Stack.Screen name = "Detail" component={detailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>   
)};

