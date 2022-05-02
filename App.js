import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/screens/Home';
import Details from './src/screens/CoffeeDetails';
import { Provider} from "react-redux";
import { createStore } from 'redux';
import reducers from "./src/redux";

const Stack = createNativeStackNavigator()


const App = () => {

  const store = createStore(reducers);

  const [timePassed, setTimePassed] = useState(false)

  setTimeout(() => {
    setTimePassed(true)
  }, 3000);


  if (timePassed === false) {
    return (
      <SafeAreaView style={styles.background}>
        <Image source={{ uri: "https://i.pinimg.com/originals/78/76/0b/78760b3423fcbb2b3e3bbf06f980a12e.png", width: 140, height: 140 }} resizeMode="contain" />
      </SafeAreaView>
    );
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}


const styles= StyleSheet.create({
  background: {
    backgroundColor: "#fff5de",
    flex: 1,
    borderColor: "#926f34",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App; 
