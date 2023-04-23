import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login, Home } from './src/screens';
import { routes } from './src/constants';
import { Provider as PaperProvider } from 'react-native-paper';
import { BottomTabNavigator } from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {


  return (
    
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }} initialRouteName={routes.LOGIN}>
            <Stack.Screen name={routes.LOGIN} component={Login} />
            <Stack.Screen name={routes.HOME_TAB} component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>

      </PaperProvider>
    

  );
}



export default App;
