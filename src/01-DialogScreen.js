import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import RootSiblings from 'react-native-root-siblings'
import { showModel,dismissModel } from './component/ModelOperations';
import warningPopUp from '../images/warning.png'

let siblings = null;

export default class DialogScreen extends Component {
  render() {
    return (
      <View>
        <Text>案例：显示单个弹框</Text>
        <Pressable onPress={()=>{
          this.clickAndPopup();
        }} style={{width:100,height:30,backgroundColor:'gray',alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
          <Text>1222</Text>
        </Pressable>
      </View>
    )
  }

  clickAndPopup(){
    console.log("111222");

    showModel(
      <MentionPopUp/>
    );
  }
}


function MentionPopUp(){
  return (
    <View style={styles.popUpStyle}>
      <View style={{alignItems : 'center',height:180,justifyContent:'space-around',paddingVertical:10}}>
        <Image source={warningPopUp} style={styles.popUpImgStyle}></Image>
        <Text style={styles.popUpTitleStyle}>提示</Text>
        <Text style={styles.popUpDetailStyle}>关机状态下不能运行定时任务</Text>
      </View>
      {/* bottom Area */}
      <View style={{height:50,borderTopColor:'#DDDDDD',borderTopWidth:1,width:'100%',justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>{
          console.log("确定");
          dismissModel();
        }}>
          <Text style={{color : '#289178', fontSize:16, alignSelf:'center' }}>确定</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  popUpStyle : {
    width : 280,
    height : 230,
    backgroundColor : 'white',
    borderRadius : 8,
  },
  popUpImgStyle : {
    width : 60,
    height : 60
  },
  popUpTitleStyle : {
    fontSize : 26
  },
  popUpDetailStyle : {
    fontSize : 14
  }
})