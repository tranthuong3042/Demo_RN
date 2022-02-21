import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Image } from "react-native";

const Home = ({navigation}:{navigation:any}) => {

  return (
    <View style={style.container}>
      <View style={style.up}>
        <Image source={require('../assets/images/images.png')}
               style={{width:300,
                 height:300}}
        />
      </View>
      <View style={style.down}>
          <Text
            style={style.title}
            onPress={()=> navigation.navigate('SignIn')}
          >
            Welcome
          </Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container :{
    flex :1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:'#eee8e8'
  },
  up :{
    flex : 7 ,
    flexDirection:'column',
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center'
  },
  down :{
    flex:3,
    flexDirection:'column',
    backgroundColor:'#ffffff',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  title:{
    color:'#000',
    textAlign:'center',
    width:400,
    fontSize:40
  },
});
export default Home;
