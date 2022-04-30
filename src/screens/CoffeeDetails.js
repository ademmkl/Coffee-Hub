import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image
} from "react-native";

class Details extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            amount: 1,
    
            small: 0.2,
            mid: 1,
            big: 0.2,
            size: "mid",
    
            oneCube:0.2,
            twoCubes:1,
            threeCubes:0.2,
            cubes:2
        }
    
        this.styles = StyleSheet.create({
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
    }

    reduceAmount = () =>{
        if(this.state.amount > 1){
            this.setState({amount: this.state.amount - 1});
        }
    }

    raiseAmount = () =>{
        this.setState({amount: this.state.amount + 1});
    }
    
    setSize = (size) => {

        switch(size){
            case "small":
                this.setState({small:1,mid:0.2,big:0.2,size:size})
                break;
            case "mid":
                this.setState({small:0.2,mid:1,big:0.2,size:size})
                break;
            case "big":
                this.setState({small:0.2,mid:0.2,big:1,size:size})
                break;
        }
    }

    setCubes = (cubes) => {

        switch(cubes){
            case 1:
                this.setState({oneCube:1,twoCubes:0.2,threeCubes:0.2,cubes: cubes})
                break;
            case 2:
                this.setState({oneCube:0.2,twoCubes:1,threeCubes:0.2,cubes: cubes})
                break;
            case 3:
                this.setState({oneCube:0.2,twoCubes:0.2,threeCubes:1,cubes: cubes})
                break;
        }
    }


    render(){
        return(
            <SafeAreaView style={this.styles.background}>
                <View style={this.styles.menuBox}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("Home")} style={{flexDirection:"column", marginLeft:25, width:20, height:20, justifyContent:"center"}}>
                        <View style={{width:14, height:2.5, backgroundColor:"rgba(0,0,0,0.7)", transform: [{rotate: "-45deg"}, { translateY:-4}]}}></View>
                        <View style={{width:14, height:2.5, backgroundColor:"rgba(0,0,0,0.7)", transform: [{rotate: "45deg"}, { translateY:4}]}}></View>
                    </TouchableOpacity>
                    <Text style={{fontSize:18, color:"black", fontWeight:"bold", marginLeft:90}}>Cappuccino</Text>
                </View>
                <View style={this.styles.coffeeSelf}>
                    <Image source={{uri:"https://www.shareicon.net/data/2016/08/01/805158_coffee_512x512.png", width:100, height:100}} resizeMode="contain"/>
                </View>
                <View style={this.styles.coffeeDetails}>
                    <View style={this.styles.count}>
                        <View>
                            <Text style={{fontSize:16, fontWeight:"500", color:"black"}}>Cappuccino</Text>
                            <Text style={{fontSize:25, fontWeight:"600", color:"#caa472"}}><Text style={{fontSize:20, fontWeight:"600", color:"#caa472"}}>₺</Text>15</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <TouchableOpacity onPress={this.reduceAmount} style={{height:30, width:35, backgroundColor:"#caa472", borderTopLeftRadius:15, borderBottomLeftRadius:15, alignItems:"center", justifyContent:"center"}}>
                                <Text style={{fontSize:18}}>—</Text>
                            </TouchableOpacity>
                            <View style={{height:30, paddingHorizontal: 10, alignItems:"center", justifyContent:"center"}}>
                                <Text>{this.state.amount}</Text>
                            </View>
                            <TouchableOpacity onPress={this.raiseAmount} style={{height:30, width:35, backgroundColor:"#caa472", borderTopRightRadius:15, borderBottomRightRadius:15, alignItems:"center", justifyContent:"center"}}>
                                <Text style={{fontSize:18}}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={this.styles.size}>
                        <Text style={{fontSize:16, fontWeight:"500", color:"black"}}>Size</Text>
                        <View style={{flexDirection:"row", alignItems:"baseline"}}>
                            <TouchableOpacity onPress={() => this.setSize("small")} activeOpacity={1}>
                                <Image source={{uri:"https://www.shareicon.net/data/2016/08/01/805158_coffee_512x512.png", width:33, height:33}} style={{marginRight:8, opacity:this.state.small}} resizeMode="contain"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setSize("mid")} activeOpacity={1}>
                                <Image source={{uri:"https://www.shareicon.net/data/2016/08/01/805158_coffee_512x512.png", width:40, height:40}} style={{marginRight:8, opacity:this.state.mid}} resizeMode="contain"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setSize("big")} activeOpacity={1}>
                                <Image source={{uri:"https://www.shareicon.net/data/2016/08/01/805158_coffee_512x512.png", width:47, height:47}} style={{marginRight:8, opacity:this.state.big}} resizeMode="contain"/>
                            </TouchableOpacity>
                       </View>
                    </View>
                    <View style={this.styles.sugar}>
                        <Text style={{fontSize:16, fontWeight:"500", color:"black"}}>Sugar <Text style={{fontSize:15, fontWeight:"500", color:"rgba(0,0,0,0.3)"}}>(in cubes)</Text></Text>
                        <View style={{flexDirection:"row", alignItems:"flex-end", flex:1}}>
                            <TouchableOpacity onPress={() => this.setCubes(1)} style={{marginHorizontal:8}} activeOpacity={1}>
                                <Image source={require("./one_cube.png")} style={{width:25, height:25,opacity:this.state.oneCube}} resizeMode="contain"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setCubes(2)} style={{marginHorizontal:8}} activeOpacity={1}>
                                <Image source={require("./two_cubes.png")} style={{width:30, height:30,opacity:this.state.twoCubes}} resizeMode="contain"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setCubes(3)} style={{marginHorizontal:8}} activeOpacity={1}>
                                <Image source={require("./three_sugar.png")} style={{width:38, height:38,opacity:this.state.threeCubes}} resizeMode="contain"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("Home")} style={this.styles.add}>
                        <Text style={{fontSize:16, color:"#fff"}}>Add to card</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    };
}

export default Details;
