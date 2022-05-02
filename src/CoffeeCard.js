import React from "react";
import { 
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";


const Card = (props)=>{
    const navigation= useNavigation();

    return(
        <View style={{flex:1, flexDirection:"row", alignItems:"center", paddingHorizontal:20, justifyContent:"space-between"}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image source={{uri:props?.url, width:50, height:50}} style={{marginRight:30}} resizeMode="contain"/>
                <Text style={styles.coffeeTitles}>{props?.name}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Details",{title: props?.name, image: props?.url, price: props?.price})} style={{width: 40, height:40, justifyContent:"center", alignItems:"center"}}>
                <View style={{width:10, height:2, backgroundColor:"rgba(0,0,0,0.4)", transform: [{rotate: "45deg"}, { translateY:-3}]}}/>
                <View style={{width:10, height:2, backgroundColor:"rgba(0,0,0,0.4)", transform: [{rotate: "-45deg"}, { translateY:3}]}}/>
            </TouchableOpacity>
        </View>
    );
    
}

const styles = StyleSheet.create({
    coffeeTitles:{
      fontSize: 18
    }
});

export default Card;