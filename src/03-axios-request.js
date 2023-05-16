import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'

export default class AxiosRequestScreen extends Component {

  componentDidMount(){
  }

  getRequest(){
    axios.get('https://mockapi.eolink.com/U6CZxWM9cedf95a49b4284e3e1a7985c53f89a9ccda5d45/mine/getUserList',{
      params : {
        usedType : 1
      }
    }).then(function (response){
      console.log(response.data,JSON.stringify(response.data))
    })
  }

  postRequest(){
    axios('https://mockapi.eolink.com/U6CZxWM9cedf95a49b4284e3e1a7985c53f89a9ccda5d45/user/login',{
        method : 'post',
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        data : {
          userName : 'admin',
          password : 'admin123'
        }
    }).then(result => {
      console.log("result data is ",JSON.stringify(result.data))
    })
  }

  render() {
    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Pressable onPress={()=>{this.getRequest()}} style={styles.buttonStyle}>
          <Text>get请求</Text>
        </Pressable>
        <Pressable onPress={()=>{this.postRequest()}} style={styles.buttonStyle}>
          <Text>post请求</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle : {
    width : 100,
    height : 40,
    backgroundColor: 'red',
    marginTop  :20,
    justifyContent:'center',
    alignItems:'center'
  }
})