import React, {useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image
} from "react-native";

import { useRoute, useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { SetAmount, SetSize } from "../redux/action";

const Details = (props) => {

    const {GeneralResponse} = useSelector(s => s)
    const dispatch = useDispatch();

    const [state, setState] = useState({
        amount: 1,

        oneCube:0.2,
        twoCubes:1,
        threeCubes:0.2,
        cubes:2   
    })

    const navigation = useNavigation()
    const route = useRoute()

    const setCubes = (cubes) => {

        switch(cubes){
            case 1:
                setState({...state, oneCube:1,twoCubes:0.2,threeCubes:0.2,cubes: cubes})
                break;
            case 2:
                setState({...state, oneCube:0.2,twoCubes:1,threeCubes:0.2,cubes: cubes})
                break;
            case 3:
                setState({...state, oneCube:0.2,twoCubes:0.2,threeCubes:1,cubes: cubes})
                break;
        }
    }

    const setAmount = () => {
        if(GeneralResponse.amount > 1){
            dispatch(SetAmount(GeneralResponse.amount -1))
        }
    }

    return(
        <SafeAreaView style={styles.background}>
            <View style={styles.menuBox}>
                <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={{flexDirection:"column", marginLeft:25, width:20, height:20, justifyContent:"center"}}>
                    <View style={{width:14, height:2.5, backgroundColor:"rgba(0,0,0,0.7)", transform: [{rotate: "-45deg"}, { translateY:-4}]}}></View>
                    <View style={{width:14, height:2.5, backgroundColor:"rgba(0,0,0,0.7)", transform: [{rotate: "45deg"}, { translateY:4}]}}></View>
                </TouchableOpacity>
                <Text style={{fontSize:18, color:"black", fontWeight:"bold", marginLeft:90}}>{route.params.title}</Text>
            </View>
            <View style={styles.coffeeSelf}>
                <Image source={{uri:route.params.image, width:100, height:100}} resizeMode="contain"/>
            </View>
            <View style={styles.coffeeDetails}>
                <View style={styles.count}>
                    <View>
                        <Text style={{fontSize:16, fontWeight:"500", color:"black"}}>{route.params.title}</Text>
                        <Text style={{fontSize:25, fontWeight:"600", color:"#caa472"}}><Text style={{fontSize:20, fontWeight:"600", color:"#caa472"}}>₺</Text>{route.params.price}</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity onPress={setAmount} style={{height:30, width:35, backgroundColor:"#caa472", borderTopLeftRadius:15, borderBottomLeftRadius:15, alignItems:"center", justifyContent:"center"}}>
                            <Text style={{fontSize:18}}>—</Text>
                        </TouchableOpacity>
                        <View style={{height:30, paddingHorizontal: 10, alignItems:"center", justifyContent:"center"}}>
                            <Text>{GeneralResponse.amount}</Text>
                        </View>
                        <TouchableOpacity onPress={()=> dispatch(SetAmount(GeneralResponse.amount +1))} style={{height:30, width:35, backgroundColor:"#caa472", borderTopRightRadius:15, borderBottomRightRadius:15, alignItems:"center", justifyContent:"center"}}>
                            <Text style={{fontSize:18}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.size}>
                    <Text style={{fontSize:16, fontWeight:"500", color:"black"}}>Size</Text>
                    <View style={{flexDirection:"row", alignItems:"baseline"}}>
                        <TouchableOpacity onPress={() => dispatch(SetSize("small"))} activeOpacity={1}>
                            <Image source={{uri:route.params.image, width:33, height:33}} style={{marginHorizontal:10, opacity: GeneralResponse.size === "small"? 1: 0.3}} resizeMode="contain"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => dispatch(SetSize("mid"))} activeOpacity={1}>
                            <Image source={{uri:route.params.image, width:40, height:40}} style={{marginHorizontal:10, opacity:GeneralResponse.size === "mid"? 1: 0.3}} resizeMode="contain"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => dispatch(SetSize("big"))} activeOpacity={1}>
                            <Image source={{uri:route.params.image, width:47, height:47}} style={{marginHorizontal:10, opacity:GeneralResponse.size === "big"? 1: 0.3}} resizeMode="contain"/>
                        </TouchableOpacity>
                   </View>
                </View>
                <View style={styles.sugar}>
                    <Text style={{fontSize:16, fontWeight:"500", color:"black"}}>Sugar <Text style={{fontSize:15, fontWeight:"500", color:"rgba(0,0,0,0.3)"}}>(in cubes)</Text></Text>
                    <View style={{flexDirection:"row", alignItems:"flex-end", flex:1}}>
                        <TouchableOpacity onPress={() => setCubes(1)} style={{marginHorizontal:12}} activeOpacity={1}>
                            <Image source={require("./one_cube.png")} style={{width:25, height:25,opacity:state.oneCube}} resizeMode="contain"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCubes(2)} style={{marginHorizontal:12}} activeOpacity={1}>
                            <Image source={require("./two_cubes.png")} style={{width:30, height:30,opacity:state.twoCubes}} resizeMode="contain"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>setCubes(3)} style={{marginHorizontal:12}} activeOpacity={1}>
                            <Image source={require("./three_sugar.png")} style={{width:38, height:38,opacity:state.threeCubes}} resizeMode="contain"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Home")} style={styles.add}>
                    <Text style={{fontSize:16, color:"#fff"}}>Add to card</Text>
                </TouchableOpacity>
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
        flexDirection:"row",
        alignItems: "center"
    },
    coffeeSelf:{
        flex:4,
        alignItems:"center",
        justifyContent:"center"
    },
    coffeeDetails:{
        flex:8,
        backgroundColor:"white",
        justifyContent:"space-evenly"
    },
    count:{
        flex: 0.15,
        flexDirection: "row",
        paddingHorizontal:25,
        justifyContent:"space-between"
    },
    size:{
        flex:0.26,
        paddingHorizontal:25,
        justifyContent:"space-around"
    },
    sugar:{
        flex:0.20,
        paddingHorizontal:25,
    },
    add:{
        backgroundColor:"#caa472",
        width: 200,
        height:50,
        borderRadius:25,
        alignSelf:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        
        alignItems:"center",
        justifyContent:"center"
    }
});

export default Details;
