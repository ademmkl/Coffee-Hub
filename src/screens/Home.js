import React, {useEffect, useState} from 'react';
 import {
   SafeAreaView,
   View,
   StyleSheet,
   Text,
   TouchableOpacity,
   Image
 } from 'react-native';

 import Card from '../CoffeeCard';

 const Home = () => {

  const [coffees, setCoffees] = useState([
    {
      url:"https://freesvg.org/img/pitr_Coffee_cup_icon.png",
      name: "Espresso",
      id: 1
    },
    {
      url:"https://www.shareicon.net/data/2016/08/01/805158_coffee_512x512.png",
      name:"Cappuccino",
      id:2
    },
    {
      url:"https://cdn-icons-png.flaticon.com/512/172/172869.png",
      name:"Macchiato",
      id:3
    },
    {
      url:"https://cdn.iconscout.com/icon/free/png-256/mocha-3962507-3283389.png",
      name:"Mocha",
      id:4
    },
    {
      url:"https://cdn-icons-png.flaticon.com/512/1365/1365585.png",
      name:"Latte",
      id:5
    }
  ]);


  return (
    <SafeAreaView style={styles.background}>
        <View style={styles.menuBox}>
         <TouchableOpacity style={{width:25}}>
           <View style={{width:22, height:3, borderRadius:1, backgroundColor:"rgba(0,0,0,0.8)", margin:2, marginHorizontal:25}}/>
           <View style={{width:16, height:3, borderRadius:1, backgroundColor:"#926f34dd", margin:2, marginHorizontal:25}}/>
           <View style={{width:10, height:3, borderRadius:1, backgroundColor:"rgba(0,0,0,0.8)", margin:2, marginHorizontal:25}}/>
         </TouchableOpacity>
         <TouchableOpacity>
           <Image source={{uri:"https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png", width:23, height:20}} style={{marginHorizontal:25}} resizeMode="contain"/>
         </TouchableOpacity>
        </View>
        <View style={styles.textBox}>
          <Text style={{fontSize:29, color:"#000"}}>It's Great <Text style={{color:"#926f34"}}>Day for Coffee.</Text></Text>
        </View>
        <View style={styles.contentBox}>
          {
            coffees.map(
              (val) =>
              <Card
                key={val?.id}
                url={val?.url}
                name={val?.name}
              />
            )
          }
          <View style={styles.navBox}>
             <Image source={{uri:"https://cdn2.iconfinder.com/data/icons/the-most-useful-basic-for-mobile-app-or-website-ou/32/the_most_useful_icon_for_mobile_app_or_website-01-512.png", width:28, height:28}} style={{opacity:1}} resizeMode="contain"></Image>
             <Image source={{uri:"https://cdn.icon-icons.com/icons2/2768/PNG/512/location_icon_176656.png", width:45, height:60}} style={{opacity:0.3}} resizeMode="contain"></Image>
             <Image source={{uri:"https://static.thenounproject.com/png/1219977-200.png", width:35, height:35}} style={{opacity:0.4}} resizeMode="contain"></Image>
             <Image source={{uri:"https://icon-library.com/images/icon-user/icon-user-24.jpg", width:28, height:28}} style={{opacity:0.3}} resizeMode="contain"></Image>
          </View>
        </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    background: {
      backgroundColor: "#fff5de",
      flex: 1,
      borderColor:"#926f34",
      borderWidth:2
    },
    menuBox:{
      flex:1,
      alignItems:"center",
      justifyContent:"space-between",
      flexDirection: "row"
    },
    textBox:{
      flex:1.3,
      justifyContent:"center",
      paddingHorizontal: 25
    },
    contentBox:{
      flex:10
    },
    navBox:{
      flex:0.8,
      backgroundColor: "white",
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
      justifyContent: "space-around",
      flexDirection: "row",
      alignItems: "center"
    }
});

export default Home; 
