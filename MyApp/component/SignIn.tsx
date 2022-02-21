import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Image } from "react-native";


const SignIn = ({navigation}:{navigation:any}) => {

  return (
    <View style={style.container}>
      <View style={style.up}>
        <Image source={require('../assets/images/images.png')}
               style={{width:150,
                 height:150}}
        />
        <Text style={style.title}>
          Sign In
        </Text>
      </View>
      <View style={style.down}>
        <View style={style.textInputContainer}>
          <TextInput
            style={style.TextInput}
            textContentType={"emailAddress"}
            keyboardType={"email-address"}
            placeholder={'Enter your email'}
          />
        </View>
        <View style={style.textInputContainer1}>
          <TextInput
            style={style.TextInput}
            secureTextEntry={true}
            placeholder={'Enter your password'}>
          </TextInput>
        </View>
        <View style={style.textInputContainer1}>
        </View>
        <View >
          <TouchableOpacity style={style.loginBtn}
                            onPress={()=> navigation.navigate('SignUp')}>
            <Text style={style.LoginBtnTitle}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={style.forgotPass}>
            <Text style={style.forgotPassTitle}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
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
    flex:3,
    flexDirection:'column',
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center'
  },
  down :{
    flex:7,
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
  textInputContainer:{
    paddingHorizontal:90,
    borderRadius:3,
    marginTop:60,
    backgroundColor:'#e7e1e1',
    marginBottom:10,

  },
  textInputContainer1:{
    paddingHorizontal:90,
    borderRadius:3,
    marginTop:20,
    backgroundColor:'#e7e1e1',
    marginBottom:10,

  },
  TextInput:{
    width:100,
    height:60,
  },
  loginBtn:{
    width:150,
    height:45,
    backgroundColor:'rgba(43,87,85,0.4)',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,

  },
  LoginBtnTitle:{
    fontSize:20,
    color:'white',

  },
  forgotPass:{
    width:400,
    height:45,
    backgroundColor:'#ffffff',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    marginTop:60,
  },
  forgotPassTitle:{
    fontSize:20,
    color:'black',
    textDecorationLine:'underline'
  },
});
export default SignIn;
