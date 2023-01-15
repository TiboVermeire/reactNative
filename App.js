import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import homeScreen from './screens/homeScreen';
import detailScreen from './screens/detailScreen';
import winkelwagen from './screens/winkelwagen';
import snackAli from './screens/snackAli';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="Details" component={detailScreen} />
        <Stack.Screen name="Winkelwagen" component={winkelwagen} />
        <Stack.Screen name="Snack" component={snackAli}/>
      </Stack.Navigator>
    </NavigationContainer>   
)};

