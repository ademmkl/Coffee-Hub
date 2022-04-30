 import React from 'react';
 import {
  SafeAreaView,
  StyleSheet,
  Image
} from 'react-native';
 import {NavigationContainer} from "@react-navigation/native"
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
 import Home from './src/screens/Home';
 import Details from './src/screens/CoffeeDetails';


 import { useNavigation } from "@react-navigation/native";

 const nav = () => {
  const navigation = useNavigation();
   return(
     <Details navigation = {navigation}/>
   );
 }
 
 const Stack = createNativeStackNavigator()


 class App extends React.Component{

  state={
    timePassed: false,
    styles:StyleSheet.create({
      background: {
        backgroundColor: "#fff5de",
        flex: 1,
        borderColor:"#926f34",
        borderWidth:2,
        alignItems:"center",
        justifyContent:"center"
      }
    })
  }


  render(){
    setTimeout(()=>{
      this.setState({timePassed:true})
    }, 3000);

    if (this.state.timePassed === false){
     return (
       <SafeAreaView style={this.state.styles.background}>
           <Image source={{uri:"https://i.pinimg.com/originals/78/76/0b/78760b3423fcbb2b3e3bbf06f980a12e.png", width:140, height:140}} resizeMode="contain" />
       </SafeAreaView>
     );
    }else{
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name="Details" component={Details}/>
          </Stack.Navigator>
        </NavigationContainer>
       );
    }
  }
   
 };
 
 export default App; 
